package com.markmaster.backend.models;

import jakarta.persistence.*;
import org.yaml.snakeyaml.error.Mark;

import java.util.Optional;

@Entity
@Table(name = "student_mark_exam", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"course_id", "student_id", "exam_id"})
})
public class StudentMarkExam extends AbstractBaseEntity {

    private Integer mark;
    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exam exam;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public StudentMarkExam() {

    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Integer getMark() {
        return mark;
    }

    public void setMark(Integer mark) {
        this.mark = mark;
    }
}
