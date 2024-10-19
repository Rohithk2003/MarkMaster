package com.markmaster.backend.controllers;

import com.markmaster.backend.helpers.HttpResponseMessageHandler;
import com.markmaster.backend.models.Department;
import com.markmaster.backend.service.Department.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/department")
public class DepartmentController {
    private final DepartmentService departmentService;
    private final HttpResponseMessageHandler httpResponseUpdater;

    @Autowired
    public DepartmentController(DepartmentService departmentService, HttpResponseMessageHandler httpResponseUpdater) {
        this.departmentService = departmentService;
        this.httpResponseUpdater = httpResponseUpdater;
    }

    @GetMapping("/all")
    ResponseEntity<Map<String, Object>> all() {
        return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, departmentService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Map<String, Object>> getById(@PathVariable Long id) {
        Optional<Department> departmentOptional = Optional.ofNullable(departmentService.findById(id));
        if (departmentOptional.isPresent()) {
            return httpResponseUpdater.updateHttpResponse("Success", HttpStatus.OK, departmentOptional);
        }
        return httpResponseUpdater.updateHttpResponse("Department with the given id not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    Department create(@RequestBody Department department) throws HttpMessageNotReadableException {

        departmentService.save(department);
        return department;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody Department department) {
        Optional<Department> departmentOptional = Optional.ofNullable(departmentService.findById(id));
        if (departmentOptional.isPresent()) {
            departmentService.updateById(department, id);
            return httpResponseUpdater.updateHttpResponse("Department with id:" + id + " has been updated successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Department with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Optional<Department> departmentOptional = Optional.ofNullable(departmentService.findById(id));
        if (departmentOptional.isPresent()) {
            departmentService.deleteById(id);
            return httpResponseUpdater.updateHttpResponse("Department with id:" + id + " has been deleted successfully", HttpStatus.OK);
        }
        return httpResponseUpdater.updateHttpResponse("Department with id:" + id + " not found", HttpStatus.NOT_FOUND);
    }
}
