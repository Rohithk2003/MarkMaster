package com.markmaster.backend.service.StudentMarkExam;

import java.util.List;

import com.markmaster.backend.models.StudentMarkExam;
import com.markmaster.backend.service.Crud.AbstractBaseService;

public interface StudentExamMarkService extends AbstractBaseService<StudentMarkExam,Long> {
        List<StudentMarkExam> findByStudentId(Long studentId);

}
