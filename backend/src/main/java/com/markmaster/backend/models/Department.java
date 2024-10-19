package com.markmaster.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Department")
public class Department extends AbstractBaseEntity {
    @Column(name = "dept_name", nullable = false)
    private String departmentName;


    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
