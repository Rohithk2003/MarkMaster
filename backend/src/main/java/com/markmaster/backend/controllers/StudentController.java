package com.markmaster.backend.controllers;

import com.markmaster.backend.helpers.HttpResponseMessageHandler;
import com.markmaster.backend.models.Student;
import com.markmaster.backend.service.Student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    private final StudentService studentService;
    private final HttpResponseMessageHandler httpResponseUpdater;

    @Autowired
    public StudentController(StudentService studentService, HttpResponseMessageHandler httpResponseUpdater) {
        this.studentService = studentService;
        this.httpResponseUpdater = httpResponseUpdater;
    }

    @GetMapping("/all")
    ResponseEntity<Map<String, Object>> all() {
        return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, studentService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Map<String, Object>> getById(@PathVariable Long id) {
        Optional<Student> studentOptional = Optional.ofNullable(studentService.findById(id));
        if (studentOptional.isPresent()) {
            return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, studentOptional);
        }
        return httpResponseUpdater.updateHttpResponse("Student with the given id not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    Student create(@RequestBody Student student) throws HttpMessageNotReadableException {

        studentService.save(student);
        return student;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody Student student) {
        Optional<Student> studentOptional = Optional.ofNullable(studentService.findById(id));
        if (studentOptional.isPresent()) {
            studentService.updateById(student, id);
            return httpResponseUpdater.updateHttpResponse("Student with id:" + id + " has been updated successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Student with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Optional<Student> studentOptional = Optional.ofNullable(studentService.findById(id));
        if (studentOptional.isPresent()) {
            studentService.deleteById(id);
            return httpResponseUpdater.updateHttpResponse("Student with id:" + id + " has been deleted successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Student with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }
}
