package repository;

import domain.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface BlogRepository extends MongoRepository<Blog, String> {
    @Query(sort = "{ 'createdAt' : -1 }")
    List<Blog> findAllByOrderByCreatedAtDesc();
}
