package com.markmaster.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "course_name")
    private String courseName;
    @OneToOne(targetEntity = Department.class, cascade = CascadeType.REMOVE)
    private Department department;

}
