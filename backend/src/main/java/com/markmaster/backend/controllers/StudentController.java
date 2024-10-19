package com.markmaster.backend.controllers;

import com.markmaster.backend.models.Student;
import com.markmaster.backend.service.Student.StudentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
public class StudentController {
    private final StudentService studentService;

    @Autowired
    StudentController(StudentService studentService) {
        super();
        this.studentService = studentService;
    }


    @GetMapping("/student/all")
    public List<Student> getStudentDetails() {
        return studentService.getStudents();
    }

    @GetMapping("/student/{id}")
    public Student studentById(@PathVariable("id") long id) {

        return studentService.getStudentById(id);
    }

    @PostMapping("/student/add")
    public String addStudent(@RequestBody Student student) {
        System.out.println("hello");
        studentService.addStudent(student);
        return "Success";

    }

    @PutMapping("/student/{id}")
    public String UpdateStudent(@PathVariable("id") long id, @RequestBody Student student) {
        studentService.updateStudent(student);
        return "Success";
    }

    @DeleteMapping("/student/{id}")
    public String deleteStudent(@PathVariable("id") long id) {
        studentService.deleteStudent(id);
        return "Success";
    }

}
