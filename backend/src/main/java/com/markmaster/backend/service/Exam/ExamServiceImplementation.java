package com.markmaster.backend.service.Exam;

import com.markmaster.backend.models.Exam;
import com.markmaster.backend.repository.AbstractBaseRepository;
import com.markmaster.backend.repository.ExamRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ExamServiceImplementation extends AbstractBaseRepositoryImpl<Exam, Long> implements ExamService {
    private ExamRepo examRepo;

    public ExamServiceImplementation(ExamRepo examRepo) {
        super(examRepo);
    }
}
