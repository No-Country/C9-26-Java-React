package com.nocountry.backend.controller;

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.service.IExamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/exams")
@RequiredArgsConstructor
public class ExamController {
    private final IExamService service;

    @GetMapping("/")
    public ResponseEntity<List<ExamDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<ExamDto>> getExam(@PathVariable Long id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<List<ExamDto>> getExamsByStudent(@PathVariable Long id) {
        return new ResponseEntity<>(service.getExamsByStudent_id(id), HttpStatus.ACCEPTED);
    }
}
