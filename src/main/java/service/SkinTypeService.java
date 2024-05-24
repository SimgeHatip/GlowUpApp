package service;

import domain.SkinType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.SkinTypeRepository;

@Service
public class SkinTypeService {

    @Autowired
    private SkinTypeRepository skinTypeRepository;

    public void saveSkinType(String skinType) {
        SkinType entity = new SkinType();
        entity.setName(skinType);
        skinTypeRepository.save(entity);
    }
}

