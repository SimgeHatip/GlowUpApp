package repository;
import domain.SkinType;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkinTypeRepository extends MongoRepository<SkinType, String> {
}
