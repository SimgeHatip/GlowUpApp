package service;

import domain.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.BlogRepository;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> getAllBlogs() {
        return blogRepository.findAllByOrderByCreatedAtDesc();
    }

    public Blog getBlogById(String id) {
        return blogRepository.findById(id).orElse(null);
    }

    public Blog createBlog(Blog blog) {
        blog.setId(null);
        return blogRepository.save(blog);
    }

    public void deleteBlog(String id) {
        blogRepository.deleteById(id);
    }
}
