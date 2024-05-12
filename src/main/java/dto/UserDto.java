package dto;
import domain.Role;
import domain.SkinType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserDto {

    private String id;
    private String name;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private boolean isVerified;
    private Set<Role> roles;
    private SkinType skinType;
    private boolean isAcneProne;
    private boolean isSpotProne;
}
