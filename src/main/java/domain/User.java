package domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
  @Id
  public String id;
  public String name;
  public String lastName;
  private String username;
  public String email;
  public String password;
  public boolean isVerified;
  public Set<Role> roles;
  public SkinType skinType;
  public boolean isAcneProne;
  public boolean isSpotProne;
  public String avatarUrl;
}
