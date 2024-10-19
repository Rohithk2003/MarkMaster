package com.markmaster.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "dept_name", nullable = false)
    private String departmentName;

}
