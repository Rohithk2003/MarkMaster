package com.markmaster.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Batch")
public class Batch  extends AbstractBaseEntity{


    @Column(name = "batch")
    private String batch;


    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }
}
