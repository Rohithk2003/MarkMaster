package com.markmaster.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Batch")
public class Batch {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "batch")
    private String batch;

}
