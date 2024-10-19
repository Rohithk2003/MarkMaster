package com.markmaster.backend.repository;

import com.markmaster.backend.models.Batch;
import org.springframework.stereotype.Repository;

@Repository
public interface BatchRepo extends AbstractBaseRepository<Batch,Long> {
}
