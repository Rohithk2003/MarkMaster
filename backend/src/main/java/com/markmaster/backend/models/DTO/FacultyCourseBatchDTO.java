package com.markmaster.backend.models.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.markmaster.backend.models.Batch;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.models.Department;
import com.markmaster.backend.models.Faculty;

import java.util.List;

public class FacultyCourseBatchDTO {
    @JsonProperty("faculty")
    private Faculty faculty;
    @JsonProperty("courses")
    private List<Course> courses;
    @JsonProperty("batches")
    private List<Batch> batches;
    @JsonProperty("department")
    private Department department;

    public FacultyCourseBatchDTO(List<Course> course, Faculty faculty, List<Batch> batch, Department department) {
        this.courses = course;
        this.faculty = faculty;
        this.batches = batch;
        this.department = department;
    }

    public List<Course> getCourse() {
        return courses;
    }

    public void setCourse(List<Course> course) {
        this.courses = course;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }


    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public List<Batch> getBatch() {
        return batches;
    }

    public void setBatch(List<Batch> batch) {
        this.batches = batch;
    }
}
