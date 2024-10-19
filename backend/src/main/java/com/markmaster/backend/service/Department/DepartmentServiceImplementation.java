package com.markmaster.backend.service.Department;

import com.markmaster.backend.models.Department;
import com.markmaster.backend.repository.AbstractBaseRepository;
import com.markmaster.backend.repository.DepartmentRepo;
import com.markmaster.backend.service.Crud.AbstractBaseRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class DepartmentServiceImplementation extends AbstractBaseRepositoryImpl<Department, Long> implements DepartmentService {
    private DepartmentRepo departmentRepo;
    public DepartmentServiceImplementation(DepartmentRepo departmentRepo) {
        super(departmentRepo);
    }
}