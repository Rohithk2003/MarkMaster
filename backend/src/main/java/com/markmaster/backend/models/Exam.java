    package com.markmaster.backend.models;

    import jakarta.persistence.Column;
    import jakarta.persistence.Entity;
    import jakarta.persistence.Table;

    @Entity
    @Table(name = "exam")
    public class Exam extends AbstractBaseEntity{
        @Column(name="exam_name")
        private String examName;

        public String getExamName() {
            return examName;
        }

        public void setExamName(String examName) {
            this.examName = examName;
        }
    }
