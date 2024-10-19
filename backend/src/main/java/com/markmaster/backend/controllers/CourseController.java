package com.markmaster.backend.controllers;

import com.markmaster.backend.helpers.HttpResponseMessageHandler;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.service.Course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/course")
public class CourseController {
    private final CourseService courseService;
    private final HttpResponseMessageHandler httpResponseUpdater;

    @Autowired
    public CourseController(CourseService courseService, HttpResponseMessageHandler httpResponseUpdater) {
        this.courseService = courseService;
        this.httpResponseUpdater = httpResponseUpdater;
    }

    @GetMapping("/all")
    ResponseEntity<Map<String, Object>> all() {
        return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, courseService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Map<String, Object>> getById(@PathVariable Long id) {
        Optional<Course> courseOptional = Optional.ofNullable(courseService.findById(id));
        if (courseOptional.isPresent()) {
            return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, courseOptional);
        }
        return httpResponseUpdater.updateHttpResponse("Course with the given id not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    Course create(@RequestBody Course course) throws HttpMessageNotReadableException {

        courseService.save(course);
        return course;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody Course course) {
        Optional<Course> courseOptional = Optional.ofNullable(courseService.findById(id));
        if (courseOptional.isPresent()) {
            courseService.updateById(course, id);
            return httpResponseUpdater.updateHttpResponse("Course with id:" + id + " has been updated successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Course with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Optional<Course> courseOptional = Optional.ofNullable(courseService.findById(id));
        if (courseOptional.isPresent()) {
            courseService.deleteById(id);
            return httpResponseUpdater.updateHttpResponse("Course with id:" + id + " has been deleted successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Course with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }
}
