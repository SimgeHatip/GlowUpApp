package repository;
import domain.ERole;
import domain.Role;
import domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Optional;


@Repository
public interface RoleRepository  extends MongoRepository<Role, String>{
    Optional<Role> findByName(ERole name);
}
