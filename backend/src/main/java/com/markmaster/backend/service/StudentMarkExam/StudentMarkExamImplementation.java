package com.markmaster.backend.service.StudentMarkExam;

import com.markmaster.backend.models.AbstractBaseEntity;
import com.markmaster.backend.models.Student;
import com.markmaster.backend.models.StudentMarkExam;
import com.markmaster.backend.repository.StudentMarkExamRepo;
import com.markmaster.backend.repository.StudentRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
@Transactional
public class StudentMarkExamImplementation extends AbstractBaseRepositoryImpl<StudentMarkExam, Long>
        implements StudentExamMarkService {
    private  StudentMarkExamRepo studentMarkExamRepo;
    private final StudentRepo studentRepo;

    public StudentMarkExamImplementation(StudentMarkExamRepo studentMarkExamRepo,StudentRepo studentRepo) {
        super(studentMarkExamRepo);
        this.studentRepo = studentRepo;
        this.studentMarkExamRepo = studentMarkExamRepo;
    }

    public List<StudentMarkExam> findByStudentId(Long studentId) {
        Optional<Student> studentOptional = studentRepo.findById(studentId);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            List<StudentMarkExam> studentMarkExams = studentMarkExamRepo.findAll();
            List<StudentMarkExam> main = new ArrayList<>();
            for (StudentMarkExam studentMarkExam : studentMarkExams) {
                if (studentMarkExam.getStudent().equals(student)) {
                    main.add(studentMarkExam);
                }
            }
            return main;
        }
        List<StudentMarkExam> empty = new ArrayList<>();
        return empty;
    }
}
