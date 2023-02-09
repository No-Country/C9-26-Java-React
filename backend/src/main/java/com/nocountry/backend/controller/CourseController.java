package com.nocountry.backend.controller;

import com.nocountry.backend.model.Course;
import com.nocountry.backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseController {

    private CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/")
    List<Course> getAll() {
        return courseService.getAll();
    }

    @GetMapping("/{id}")
    Course getCourse(@RequestBody Long id) {
        return courseService.getById(id);
    }


    @PutMapping("/{id}")
    Course update(@RequestBody Course nuevo, @PathVariable Long id) {
        return courseService.update(nuevo, id);
    }

    @PostMapping("/create")
    Course create(@RequestBody Course nuevo) {
        return courseService.create(nuevo);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        courseService.delete(id);
    }
}
