package com.markmaster.backend.models.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.markmaster.backend.models.*;

import java.util.List;

public class StudentCourseBatchDTO {
    @JsonProperty("student")
    private Student student;
    @JsonProperty("courses")
    private List<Course> courses;
    @JsonProperty("batches")
    private Batch batches;

    public StudentCourseBatchDTO(List<Course> course, Batch batch) {
        this.courses = course;
        this.batches = batch;
    }


    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public Batch getBatches() {
        return batches;
    }

    public void setBatches(Batch batches) {
        this.batches = batches;
    }
}
