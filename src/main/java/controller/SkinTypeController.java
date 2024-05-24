package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.SkinTypeService;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class SkinTypeController {

    @Autowired
    private SkinTypeService skinTypeService;

    @PostMapping("/skintype")
    public ResponseEntity<String> saveSkinType(@RequestBody Map<String, String> payload) {
        String skinType = payload.get("skinType");

        // Veritabanına kaydet
        skinTypeService.saveSkinType(skinType);

        return new ResponseEntity<>("Skin type saved successfully: " + skinType, HttpStatus.OK);
    }
}
