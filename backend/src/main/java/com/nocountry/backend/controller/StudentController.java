package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.auth.config.jwt.JwtProvider;
import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;
import com.nocountry.backend.service.IStudentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService studentService;

    private final JwtProvider jwtProvider;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/all")
    public ResponseEntity<List<StudentListDto>> getAllStudents() {
        return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<StudentDetailsDto> getStudentByEmail(@RequestHeader("Authorization") String token) {
        String email = jwtProvider.extractUsername(token.substring(7));
        return new ResponseEntity<>(studentService.getStudentByEmail(email), HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<StudentDetailsDto> updateStudent(@RequestHeader("Authorization") String token,
            @RequestBody StudentDetailsDto studentDetailsDto) {
        String email = jwtProvider.extractUsername(token.substring(7));
        return new ResponseEntity<>(studentService.updateStudent(email, studentDetailsDto), HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/admin/{studentId}/add/exams/{examId}")
    public ResponseEntity<String> addExamToStudent(@PathVariable Long studentId, @PathVariable Long examId) {
        studentService.addExamToStudent(studentId, examId);
        return new ResponseEntity<>("Exam successfully added to student", HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/admin/{studentId}/add/payments/{paymentId}")
    public ResponseEntity<String> addPaymentToStudent(@PathVariable Long studentId, @PathVariable Long paymentId) {
        studentService.addPaymentToStudent(studentId, paymentId);
        return new ResponseEntity<>("Payment successfully added to student", HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/admin/{studentId}/delete")
    public ResponseEntity<String> deleteStudent(@PathVariable Long studentId) {
        studentService.deleteStudent(studentId);
        return new ResponseEntity<>("Student successfully deleted", HttpStatus.OK);
    }
}
