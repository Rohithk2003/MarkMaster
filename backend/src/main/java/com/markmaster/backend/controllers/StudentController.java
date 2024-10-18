package com.markmaster.backend.controllers;

import com.markmaster.backend.models.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    public static List<Student> students = new ArrayList<Student>();

    public StudentController() {
        students.add(new Student("King", "World", 20));
        students.add(new Student("King1", "World", 21));
        students.add(new Student("King2", "World", 22));
        students.add(new Student("King3", "World", 23));
        students.add(new Student("King4", "World", 24));
        students.add(new Student("King5", "World", 25));
    }

    @GetMapping("/student/details")
    public List<Student> getStudentDetails() {
        return students;
    }

    @GetMapping("/student/{firstName}/{lastName}")
    public Student studentById(@PathVariable("firstName") String firstName, @PathVariable("lastName") String lastName) {
        for (Student student : students) {
            if (student.getFirstName().toLowerCase().equals(firstName.toLowerCase()) && student.getLastName().equals(lastName)) {
                return student;
            }
        }
        return null;
    }

    @GetMapping("/student/search")
    public Student studentByQuery(@RequestParam(name = "first", required = false) String firstName, @RequestParam(name = "last", required = false) String lastName) {
        for (Student student : students) {
            if (student.getFirstName().equals(firstName) || student.getLastName().equals(lastName)) {
                return student;
            }
        }
        return null;
    }

    @PostMapping("/student/details")
    public String addStudent(@RequestBody Student student) {
        students.add(student);
        return "Success";

    }

    @PutMapping("/student/{firstname}/{lastname}")
    public String UpdateStudent(@PathVariable("firstname") String firstName, @PathVariable("lastname") String lastName, @RequestBody Student student) {
        for (Student stud : students) {
            if (stud.getFirstName().equals(firstName) && stud.getLastName().equals(lastName)) {
                stud.setFirstName(student.getFirstName());
                stud.setLastName(student.getLastName());
                stud.setAge(student.getAge());
            }
        }
        return "Success";
    }

    @DeleteMapping("/student/{f}/{l}")
    public String deleteStudent(@PathVariable("f") String firstName, @PathVariable("f") String lastName) {
        for (Student stud : students) {
            if (stud.getFirstName().equals(firstName) && stud.getLastName().equals(lastName)) {
                students.remove(stud);
                return "Success";
            }
        }
        return "Fail";

    }

}
