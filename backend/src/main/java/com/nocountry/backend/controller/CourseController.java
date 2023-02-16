package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.service.ICourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/courses")
@RequiredArgsConstructor
public class CourseController {

    private final ICourseService service;

    @GetMapping("/{courseId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> getCourse(@PathVariable Long courseId) {
        CourseDto courseDto = service.getCourse(courseId);
        if (courseDto != null) {
            return new ResponseEntity<>(courseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        return new ResponseEntity<>(service.getAllCourses(), HttpStatus.OK);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
        return new ResponseEntity<>(service.createCourse(courseDto), HttpStatus.CREATED);
    }

    @PutMapping("/{courseId}/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> updateCourse(@RequestBody CourseDto courseDto, @PathVariable Long courseId) {
        return new ResponseEntity<>(service.updateCourse(courseDto, courseId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{courseId}/delete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteCourse(@PathVariable Long courseId) {
        if (service.getCourse(courseId) != null) {
            service.deleteCourse(courseId);
            return new ResponseEntity<>("Course successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{courseId}/students/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<StudentDto>> getStudentsByCourseId(@PathVariable Long courseId) {
        return new ResponseEntity<>(service.getStudentsByCourseId(courseId), HttpStatus.OK);
    }

    @PutMapping("/{courseId}/add/students/{studentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addStudentToCourse(@PathVariable Long courseId, @PathVariable Long studentId) {
        service.addStudentToCourse(courseId, studentId);
        return new ResponseEntity<>("Student successfully added to course", HttpStatus.OK);
    }

    @PutMapping("/{courseId}/add/teachers/{teacherId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> setTeacherToCourse(@PathVariable Long courseId, @PathVariable Long teacherId) {
        service.setTeacherToCourse(courseId, teacherId);
        return new ResponseEntity<>("Teacher successfully added to course", HttpStatus.OK);
    }
}
