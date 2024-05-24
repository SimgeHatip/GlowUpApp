package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.SkinTypeService;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class SkinTypeController {

    @Autowired
    private SkinTypeService skinTypeService;

    @PostMapping("/skintype")
    public ResponseEntity<String> saveSkinType(@RequestBody Map<String, String> payload) {
        String skinType = payload.get("skinType");
        String userId = payload.get("userId");

        // Save skin type to user
        skinTypeService.saveSkinTypeToUser(userId, skinType);

        return new ResponseEntity<>("Skin type saved successfully: " + skinType, HttpStatus.OK);
    }
}
