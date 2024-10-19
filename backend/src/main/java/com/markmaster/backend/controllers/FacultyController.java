package com.markmaster.backend.controllers;

import com.markmaster.backend.helpers.HttpResponseMessageHandler;
import com.markmaster.backend.models.Batch;
import com.markmaster.backend.models.Course;
import com.markmaster.backend.models.DTO.FacultyCourseBatchDTO;
import com.markmaster.backend.models.Department;
import com.markmaster.backend.models.Faculty;
import com.markmaster.backend.service.Faculty.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {
    private final FacultyService facultyService;
    private final HttpResponseMessageHandler httpResponseUpdater;

    @Autowired
    public FacultyController(FacultyService facultyService, HttpResponseMessageHandler httpResponseUpdater) {
        this.facultyService = facultyService;
        this.httpResponseUpdater = httpResponseUpdater;
    }

    @GetMapping("/all")
    ResponseEntity<Map<String, Object>> all() {
        return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, facultyService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Map<String, Object>> getById(@PathVariable Long id) {
        Optional<Faculty> facultyOptional = Optional.ofNullable(facultyService.findById(id));
        if (facultyOptional.isPresent()) {
            return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, facultyOptional);
        }
        return httpResponseUpdater.updateHttpResponse("Faculty with the given id not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    ResponseEntity<Map<String, Object>> create(@RequestBody FacultyCourseBatchDTO dto) throws HttpMessageNotReadableException {
        Faculty facultyNew = dto.getFaculty();
        List<Course> course = dto.getCourse();
        List<Batch> batch = dto.getBatch();
        Department department = dto.getDepartment();
        if (facultyNew == null) {
            return httpResponseUpdater.updateHttpResponse("Faculty details cannot be empty", HttpStatus.NOT_FOUND);
        } else if (course == null) {
            return httpResponseUpdater.updateHttpResponse("Course cannot be empty", HttpStatus.NOT_FOUND);
        } else if (department == null) {
            return httpResponseUpdater.updateHttpResponse("Department cannot be empty", HttpStatus.NOT_FOUND);
        } else if (batch == null) {
            return httpResponseUpdater.updateHttpResponse("Batch cannot be empty", HttpStatus.NOT_FOUND);
        }
        facultyNew.setDepartment(department);
        facultyNew.setBatches(batch);
        facultyNew.setCourses(course);
        facultyService.save(facultyNew);
        return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, facultyNew);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id,@RequestBody FacultyCourseBatchDTO dto) {
        Optional<Faculty> facultyOptional = Optional.ofNullable(facultyService.findById(id));
        if (facultyOptional.isPresent()) {
            Faculty faculty = dto.getFaculty();
            List<Course> course = dto.getCourse();
            List<Batch> batch = dto.getBatch();
            Department department = dto.getDepartment();
            faculty.setDepartment(department);
            faculty.setBatches(batch);
            faculty.setCourses(course);
            facultyService.save(faculty);
            facultyService.updateById(faculty, id);

            return httpResponseUpdater.updateHttpResponse("Faculty with id:" + id + " has been updated successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Faculty with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Optional<Faculty> facultyOptional = Optional.ofNullable(facultyService.findById(id));
        if (facultyOptional.isPresent()) {
            facultyService.deleteById(id);
            return httpResponseUpdater.updateHttpResponse("Faculty with id:" + id + " has been deleted successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Faculty with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }
}
