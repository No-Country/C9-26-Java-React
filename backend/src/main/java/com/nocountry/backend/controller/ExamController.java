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

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.service.IExamService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/exams")
@RequiredArgsConstructor
public class ExamController {

    private final IExamService service;

    @GetMapping("/{examId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ExamDto> getExam(@PathVariable Long examId) {
        ExamDto examDto = service.getExam(examId);
        if (examDto != null) {
            return new ResponseEntity<>(examDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ExamDto>> getAllExams() {
        return new ResponseEntity<>(service.getAllExams(), HttpStatus.OK);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ExamDto> createExam(@RequestBody ExamDto examDto) {
        return new ResponseEntity<>(service.createExam(examDto), HttpStatus.CREATED);
    }

    @PutMapping("/{examId}/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ExamDto> updateExam(@RequestBody ExamDto examDto, @PathVariable Long examId) {
        return new ResponseEntity<>(service.updateExam(examDto, examId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{examId}/delete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteExam(@PathVariable Long examId) {
        if (service.getExam(examId) != null) {
            service.deleteExam(examId);
            return new ResponseEntity<>("Exam successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
