package domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "contacts")
public class Contact {
    @Id
    private String id;

    private String name;
    private String email;
    private String message;
}
