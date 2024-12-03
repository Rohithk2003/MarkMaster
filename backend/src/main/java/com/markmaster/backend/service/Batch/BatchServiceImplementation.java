package com.markmaster.backend.service.Batch;

import com.markmaster.backend.models.Batch;
import com.markmaster.backend.repository.AbstractBaseRepository;
import com.markmaster.backend.repository.BatchRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class BatchServiceImplementation extends AbstractBaseRepositoryImpl<Batch, Long> implements BatchService {
    private BatchRepo batchRepo;

    public BatchServiceImplementation(BatchRepo batchRepo) {
        super(batchRepo);
    }
}