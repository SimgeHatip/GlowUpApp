package service;

import domain.SkinType;
import domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.SkinTypeRepository;
import repository.UserRepository;

@Service
public class SkinTypeService {

    @Autowired
    private SkinTypeRepository skinTypeRepository;

    @Autowired
    private UserRepository userRepository;

    public void saveSkinTypeToUser(String userId, String skinTypeName) {
        SkinType skinType = skinTypeRepository.findByName(skinTypeName);

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setSkinType(skinType);
        userRepository.save(user);
    }
}
