package com.markmaster.backend.service.Student;

import com.markmaster.backend.models.Batch;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.models.Department;
import com.markmaster.backend.models.Student;
import com.markmaster.backend.repository.StudentRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentServiceImplementation extends AbstractBaseRepositoryImpl<Student, Long> implements StudentService {
    private StudentRepo studentRepo;

    public StudentServiceImplementation(StudentRepo studentRepo) {
        super(studentRepo);
    }


    @Override
    public void updateBatch(Long id, Batch batch) {
        Optional<Student> optionalStudent = studentRepo.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setBatch(batch);
            studentRepo.save(student);
        }
    }

    @Override
    public void updateCourses(Long id, List<Course> courses) {
        Optional<Student> optionalStudent = studentRepo.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setCourses(courses);
            studentRepo.save(student);
        }
    }
}