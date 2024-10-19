package com.markmaster.backend.service.Faculty;

import com.markmaster.backend.models.Batch;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.models.Department;
import com.markmaster.backend.models.Faculty;
import com.markmaster.backend.repository.FacultyRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class FacultyServiceImplementation extends AbstractBaseRepositoryImpl<Faculty, Long> implements FacultyService {
    private FacultyRepo facultyRepo;

    public FacultyServiceImplementation(FacultyRepo facultyRepo) {
        super(facultyRepo);
    }

    @Override
    public void updateParentDepartment(long id, Department department) {
        Optional<Faculty> faculty = facultyRepo.findById(id);
        if (faculty.isPresent()) {
            faculty.get().setDepartment(department);
            facultyRepo.save(faculty.get());
        }
    }

    @Override
    public void updateCourses(long id, List<Course> course) {
        Optional<Faculty> faculty = facultyRepo.findById(id);
        if (faculty.isPresent()) {
            faculty.get().setCourses(course);
            facultyRepo.save(faculty.get());
        }
    }

    @Override
    public void updateBatches(long id, List<Batch> batch) {
        Optional<Faculty> faculty = facultyRepo.findById(id);
        if (faculty.isPresent()) {
            faculty.get().setBatches(batch);
            facultyRepo.save(faculty.get());
        }
    }
}