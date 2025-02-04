public class AuthController {
    
}
package com.lustloop.controllers;

import com.lustloop.models.User;
import com.lustloop.repositories.UserRepository;
import com.lustloop.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @Autowired private UserRepository userRepository;
    @Autowired private JwtUtil jwtUtil;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public Map<String, String> signUp(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
        return Map.of("message", "User registered successfully");
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> loginData) {
        Optional<User> user = userRepository.findByEmail(loginData.get("email"));

        if (user.isPresent() && encoder.matches(loginData.get("password"), user.get().getPassword())) {
            String token = jwtUtil.generateToken(user.get().getEmail());
            return Map.of("token", token);
        }
        return Map.of("error", "Invalid credentials");
    }
}
