public class PostController {
    
}
@RestController
@RequestMapping("/posts")
public class PostController {
    
    @Autowired private PostRepository postRepository;
    @Autowired private UserRepository userRepository;
    
    @PostMapping("/create")
    public ResponseEntity<String> createPost(@RequestBody Map<String, String> request, @RequestHeader("Authorization") String token) {
        String email = jwtUtil.extractEmail(token.replace("Bearer ", ""));
        User user = userRepository.findByEmail(email).orElseThrow();

        Post post = new Post();
        post.setContent(request.get("content"));
        post.setMediaUrl(request.get("mediaUrl"));
        post.setUser(user);
        postRepository.save(post);

        return ResponseEntity.ok("Post created!");
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
}
