package service;

import domain.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.UserRepository;

import java.util.List;

@Service
@Slf4j
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User updateUser(String id, User user) {
        User existingUser = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setName(user.getName());
        existingUser.setLastName(user.getLastName());
        existingUser.setEmail(user.getEmail());
        return userRepository.save(existingUser);
    }
}
