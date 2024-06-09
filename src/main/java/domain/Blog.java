package domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "blogs")
public class Blog {
    @Id
    private String id;

    private String title;
    private String content;
    private String imageUrl;
    private String authorId;
    private String authorName;
    private Date createdAt;
    private Date updatedAt;

}
