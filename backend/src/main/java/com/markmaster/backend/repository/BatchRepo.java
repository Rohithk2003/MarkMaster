package com.markmaster.backend.repository;

import com.markmaster.backend.models.Batch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatchRepo extends JpaRepository<Batch, Integer> {
}
