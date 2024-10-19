package com.markmaster.backend.service.Course;

import com.markmaster.backend.models.Course;
import com.markmaster.backend.repository.AbstractBaseRepository;
import com.markmaster.backend.repository.CourseRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CourseServiceImplementation extends AbstractBaseRepositoryImpl<Course, Long> implements CourseService {
    private CourseRepo batchRepo;

    public CourseServiceImplementation(CourseRepo courseRepo) {
        super(courseRepo);
    }
}