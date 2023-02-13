package com.nocountry.backend.controller;

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.service.IExamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class ExamController {
    private final IExamService service;

    @GetMapping("/admin/exams/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ExamDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/exams/{id}")
    public ResponseEntity<Optional<ExamDto>> getById(@PathVariable Long id) {
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }
}
