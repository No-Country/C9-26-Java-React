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

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.service.ITeacherService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class TeacherController {
    private final ITeacherService service;

    @GetMapping("/admin/teachers/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<TeacherDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/admin/teachers/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<TeacherDto> create(@RequestBody TeacherDto teacher) {
        return new ResponseEntity<>(service.create(teacher), HttpStatus.CREATED);
    }

    @PutMapping("/admin/teachers/update/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<TeacherDto> update(@RequestBody TeacherDto teacher, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(teacher, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/teachers/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("teacher deleted", HttpStatus.ACCEPTED);
    }
}
