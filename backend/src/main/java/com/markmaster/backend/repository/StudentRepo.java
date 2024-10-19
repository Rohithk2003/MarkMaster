package com.markmaster.backend.repository;

import com.markmaster.backend.models.Student;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends AbstractBaseRepository<Student, Long> {
}
