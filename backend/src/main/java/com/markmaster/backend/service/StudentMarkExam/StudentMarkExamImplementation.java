package com.markmaster.backend.service.StudentMarkExam;

import com.markmaster.backend.models.AbstractBaseEntity;
import com.markmaster.backend.models.StudentMarkExam;
import com.markmaster.backend.repository.StudentMarkExamRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StudentMarkExamImplementation extends AbstractBaseRepositoryImpl<StudentMarkExam , Long> implements StudentExamMarkService {
    private StudentMarkExamRepo studentMarkExamRepo;

    public StudentMarkExamImplementation(StudentMarkExamRepo studentMarkExamRepo) {
        super(studentMarkExamRepo);
    }
}
