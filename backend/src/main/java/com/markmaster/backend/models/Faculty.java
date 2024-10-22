package com.markmaster.backend.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Faculty")
public class Faculty extends AbstractBaseEntity {
    @Column(name = "faculty_name")
    private String facultyName;

    @OneToMany(targetEntity = Course.class, cascade = CascadeType.REMOVE)
    private List<Course> courses;

    @OneToMany(targetEntity = Batch.class, cascade = CascadeType.REMOVE)
    private List<Batch> batches;
    @ManyToOne(targetEntity = Department.class, optional = true, cascade = CascadeType.REMOVE)
    private Department department;

    public String getFacultyName() {
        return facultyName;
    }

    public void setFacultyName(String facultyName) {
        this.facultyName = facultyName;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public List<Batch> getBatches() {
        return batches;
    }

    public void setBatches(List<Batch> batches) {
        this.batches = batches;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
