package controller;

import domain.Blog;
import domain.User;
import dto.BlogCreateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.BlogService;
import service.UserService;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Blog>> getAllBlogs() {
        List<Blog> blogs = blogService.getAllBlogs();
        return new ResponseEntity<>(blogs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable String id) {
        Blog blog = blogService.getBlogById(id);
        if (blog != null) {
            return new ResponseEntity<>(blog, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @PostMapping
    public ResponseEntity<Blog> createBlog(@RequestBody BlogCreateDto blogCreateDTO) {
        User user = userService.getUser(blogCreateDTO.getUserId());
        Blog blog = blogCreateDTO.getBlog();

        blog.setAuthorId(user.getId());
        blog.setAuthorName(user.getName());
        blog.setCreatedAt(new Date());
        blog.setUpdatedAt(new Date());
        Blog createdBlog = blogService.createBlog(blog);
        return new ResponseEntity<>(createdBlog, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable String id) {
        blogService.deleteBlog(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
