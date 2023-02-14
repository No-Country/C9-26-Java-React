package com.nocountry.backend.controller;

import java.util.List;
import java.util.Optional;

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

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.service.ITeacherService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TeacherController {

    private final ITeacherService service;

    @GetMapping("/admin/teachers/{teacherId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Optional<TeacherDto>> getTeacher(@PathVariable Long teacherId) {
        Optional<TeacherDto> teacherDto = service.getTeacher(teacherId);
        if (teacherDto.isPresent()) {
            return new ResponseEntity<>(teacherDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/admin/teachers/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<TeacherDto>> getAllTeachers() {
        return new ResponseEntity<>(service.getAllTeachers(), HttpStatus.OK);
    }

    @PostMapping("/admin/teachers/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<TeacherDto> createTeacher(@RequestBody TeacherDto teacherDto) {
        return new ResponseEntity<>(service.createTeacher(teacherDto), HttpStatus.CREATED);
    }

    @PutMapping("/admin/teachers/update/{teacherId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<TeacherDto> updateTeacher(@RequestBody TeacherDto teacherDto, @PathVariable Long teacherId) {
        return new ResponseEntity<>(service.updateTeacher(teacherDto, teacherId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/teachers/delete/{teacherId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteTeacher(@PathVariable Long teacherId) {
        if (service.getTeacher(teacherId).isPresent()) {
            service.deleteTeacher(teacherId);
            return new ResponseEntity<>("Teacher successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
