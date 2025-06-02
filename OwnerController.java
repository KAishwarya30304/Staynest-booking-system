package com.staynest.controller;

import com.staynest.model.Owner;
import com.staynest.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/owners")
public class OwnerController {

    @Autowired
    private OwnerRepository ownerRepository;

    @PostMapping("/login")
    public Owner login(@RequestBody Owner owner) {
        // In a real-world app, you'd check the password here
        return ownerRepository.findByEmail(owner.getEmail());
    }
    
    // Additional endpoints for other functionalities can be added
}
