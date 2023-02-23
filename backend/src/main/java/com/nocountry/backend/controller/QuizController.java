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

import com.nocountry.backend.dto.QuizDto;
import com.nocountry.backend.service.IQuizService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/quizzes")
@PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
@RequiredArgsConstructor
public class QuizController {

    private final IQuizService quizService;

    @GetMapping("/all")
    public ResponseEntity<List<QuizDto>> getAllQuizs() {
        return new ResponseEntity<>(quizService.getAllQuizzes(), HttpStatus.OK);
    }

    @GetMapping("/{quizId}")
    public ResponseEntity<QuizDto> getQuizById(@PathVariable Long quizId) {
        return new ResponseEntity<>(quizService.getQuizById(quizId), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<QuizDto> createQuiz(@RequestBody QuizDto quizDto) {
        return new ResponseEntity<>(quizService.createQuiz(quizDto), HttpStatus.CREATED);
    }

    @PatchMapping("/{quizId}/update")
    public ResponseEntity<QuizDto> updateQuiz(@PathVariable Long quizId,
            @RequestBody QuizDto quizDto) {
        return new ResponseEntity<>(quizService.updateQuiz(quizId, quizDto), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{quizId}/delete")
    public ResponseEntity<String> deleteQuiz(@PathVariable Long quizId) {
        quizService.deleteQuiz(quizId);
        return new ResponseEntity<>("Quiz successfully deleted", HttpStatus.ACCEPTED);
    }
}
