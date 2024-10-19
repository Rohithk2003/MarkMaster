package com.markmaster.backend.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Faculty")
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "faculty_name")
    private String facultyName;

    @OneToMany(targetEntity = Course.class, cascade = CascadeType.REMOVE)
    private List<Course> courses;

    @OneToMany(targetEntity = Batch.class, cascade = CascadeType.REMOVE)
    private List<Batch> batches;
}
