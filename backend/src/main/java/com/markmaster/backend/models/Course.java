package com.markmaster.backend.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Course")
public class Course extends AbstractBaseEntity {

    @Column(name = "course_name")
    private String courseName;
    @ManyToOne(targetEntity = Department.class, cascade = CascadeType.REMOVE, optional = true)
    private Department department;
    @Column(name = "course_full_name")
    private String courseFullName;


    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public String getCourseFullName() {
        return courseFullName;
    }

    public void setCourseFullName(String courseFullName) {
        this.courseFullName = courseFullName;
    }

}
