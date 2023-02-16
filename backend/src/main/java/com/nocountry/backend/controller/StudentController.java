package com.nocountry.backend.controller;

import java.util.List;

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

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.service.IStudentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService service;

    @GetMapping("/{studentId}")
    public ResponseEntity<StudentDto> getStudent(@PathVariable Long studentId) {
        StudentDto studentDto = service.getStudent(studentId);
        if (studentDto != null) {
            return new ResponseEntity<>(studentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<StudentDto>> getAllStudents() {
        return new ResponseEntity<>(service.getAllStudents(), HttpStatus.OK);
    }

    @PutMapping("/{studentId}/update")
    public ResponseEntity<StudentDto> updateStudent(@RequestBody StudentDto studentDto, @PathVariable Long studentId) {
        return new ResponseEntity<>(service.updateStudent(studentDto, studentId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{studentId}/delete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteStudent(@PathVariable Long studentId) {
        if (service.getStudent(studentId) != null) {
            service.deleteStudent(studentId);
            return new ResponseEntity<>("Student successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{studentId}/course")
    public ResponseEntity<CourseDto> getCourseByStudentId(@PathVariable Long studentId) {
        CourseDto courseDto = service.getCourseByStudentId(studentId);
        if (courseDto != null) {
            return new ResponseEntity<>(courseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{studentId}/exams")
    public ResponseEntity<List<ExamDto>> getExamsByStudentId(@PathVariable Long studentId) {
        return new ResponseEntity<>(service.getExamsByStudentId(studentId), HttpStatus.OK);
    }

    @GetMapping("/{studentId}/payments")
    public ResponseEntity<List<PaymentDto>> getPaymentsByStudentId(@PathVariable Long studentId) {
        return new ResponseEntity<>(service.getPaymentsByStudentId(studentId), HttpStatus.OK);
    }

    @PutMapping("/{studentId}/add/exams/{examId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addExamToStudent(@PathVariable Long studentId, @PathVariable Long examId) {
        service.addExamToStudent(studentId, examId);
        return new ResponseEntity<>("Exam successfully added to student", HttpStatus.OK);
    }

    @PutMapping("/{studentId}/add/payments/{paymentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addPaymentToStudent(@PathVariable Long studentId, @PathVariable Long paymentId) {
        service.addPaymentToStudent(studentId, paymentId);
        return new ResponseEntity<>("Payment successfully added to student", HttpStatus.OK);
    }
}
