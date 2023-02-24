package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.ExamDetailsDto;
import com.nocountry.backend.service.IExamService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/exams")
@RequiredArgsConstructor
public class ExamController {

    private final IExamService examService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<ExamDetailsDto>> getAllExams() {
        return new ResponseEntity<>(examService.getAllExams(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{examId}")
    public ResponseEntity<ExamDetailsDto> getExamById(@PathVariable Long examId) {
        return new ResponseEntity<>(examService.getExamById(examId), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ExamDetailsDto> createExam(@RequestBody ExamDetailsDto examDetailsDto) {
        return new ResponseEntity<>(examService.createExam(examDetailsDto), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/{examId}/update")
    public ResponseEntity<ExamDetailsDto> updateExam(@PathVariable Long examId,
            @RequestBody ExamDetailsDto examDetailsDto) {
        return new ResponseEntity<>(examService.updateExam(examId, examDetailsDto), HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{examId}/delete")
    public ResponseEntity<String> deleteExam(@PathVariable Long examId) {
        examService.deleteExam(examId);
        return new ResponseEntity<>("Exam successfully deleted", HttpStatus.ACCEPTED);
    }
}
