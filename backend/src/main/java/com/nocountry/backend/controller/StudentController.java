package com.nocountry.backend.controller;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.service.IStudentService;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService service;

    @GetMapping("/students/{id}")
    public ResponseEntity<Optional<StudentDto>> getById(@PathVariable Long id) {
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }

    @GetMapping("/admin/students/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<StudentDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @PutMapping("/students/update/{id}")
    public ResponseEntity<StudentDto> update(@RequestBody StudentDto student, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(student, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/students/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("student deleted", HttpStatus.ACCEPTED);
    }
}
