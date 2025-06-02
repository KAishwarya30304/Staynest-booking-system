package com.staynest.repository;

import com.staynest.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
    // Additional query methods can be added here if needed
    Owner findByEmail(String email);
}

