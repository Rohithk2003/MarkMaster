package com.markmaster.backend.service.Student;

import com.markmaster.backend.models.Student;
import com.markmaster.backend.repository.StudentRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StudentServiceImplementation extends AbstractBaseRepositoryImpl<Student, Long> implements StudentService {
    private StudentRepo studentRepo;
    public StudentServiceImplementation(StudentRepo studentRepo) {
        super(studentRepo);
    }
}