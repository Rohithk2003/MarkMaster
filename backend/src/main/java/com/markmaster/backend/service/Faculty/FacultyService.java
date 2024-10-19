package com.markmaster.backend.service.Faculty;

import com.markmaster.backend.models.Batch;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.models.Department;
import com.markmaster.backend.models.Faculty;
import com.markmaster.backend.service.Crud.AbstractBaseService;

import java.util.List;

public interface FacultyService extends AbstractBaseService<Faculty, Long> {
    public void updateParentDepartment(long id, Department department);

    public void updateCourses(long id, List<Course> course);

    public void updateBatches(long id, List<Batch> batch);
}
