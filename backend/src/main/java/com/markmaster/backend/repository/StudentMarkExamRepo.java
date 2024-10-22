package com.markmaster.backend.repository;

import com.markmaster.backend.models.CompositeStudent;
import com.markmaster.backend.models.StudentMarkExam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

public interface StudentMarkExamRepo extends AbstractBaseRepository<StudentMarkExam, Long> {
}
