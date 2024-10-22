package com.markmaster.backend.controllers;

import com.markmaster.backend.helpers.HttpResponseMessageHandler;
import com.markmaster.backend.models.StudentMarkExam;
import com.markmaster.backend.service.StudentMarkExam.StudentExamMarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/student/mark")
public class StudentMarkExamRepoController {
    private final StudentExamMarkService
            studentExamMarkService;
    private final HttpResponseMessageHandler responseMessageHandler;

    @Autowired
    public StudentMarkExamRepoController(StudentExamMarkService studentExamMarkService, HttpResponseMessageHandler responseMessageHandler) {
        this.studentExamMarkService = studentExamMarkService;
        this.responseMessageHandler = responseMessageHandler;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> getRequest() {
        return responseMessageHandler.updateHttpResponse("Success", HttpStatus.OK, studentExamMarkService.findAll());
    }

    @PostMapping("/")
    public ResponseEntity<Map<String, Object>> postRequest(@RequestBody StudentMarkExam studentMarkExam) {
        studentExamMarkService.save(studentMarkExam);
        return responseMessageHandler.updateHttpResponse("Success", HttpStatus.CREATED, studentExamMarkService.findAll());
    }
}
