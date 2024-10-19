package com.markmaster.backend.service.Student;

import com.markmaster.backend.models.Batch;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.models.Student;
import com.markmaster.backend.service.Crud.AbstractBaseService;

import java.util.List;

public interface StudentService extends AbstractBaseService<Student, Long> {
    public void updateBatch(Long id, Batch batch);
    public void updateCourses(Long id, List<Course> courses);
}
