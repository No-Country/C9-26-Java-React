package com.nocountry.backend.controller;

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

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.service.IStudentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService service;

    @GetMapping("/students/{studentId}")
    public ResponseEntity<Optional<StudentDto>> getStudent(@PathVariable Long studentId) {
        Optional<StudentDto> studentDto = service.getStudent(studentId);
        if (studentDto.isPresent()) {
            return new ResponseEntity<>(studentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/admin/students/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<StudentDto>> getAllStudents() {
        return new ResponseEntity<>(service.getAllStudents(), HttpStatus.OK);
    }

    @PutMapping("/students/update/{studentId}")
    public ResponseEntity<StudentDto> updateStudent(@RequestBody StudentDto studentDto, @PathVariable Long studentId) {
        return new ResponseEntity<>(service.updateStudent(studentDto, studentId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/students/delete/{StudentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteStudent(@PathVariable Long studentId) {
        if (service.getStudent(studentId).isPresent()) {
            service.deleteStudent(studentId);
            return new ResponseEntity<>("Student successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/admin/students/courses/{courseId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<StudentDto>> getStudentsByCourseId(@PathVariable Long courseId) {
        return new ResponseEntity<>(service.getStudentsByCourseId(courseId), HttpStatus.OK);
    }

    @PutMapping("/admin/students/{studentId}/exams/add/{examId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addExamToStudent(@PathVariable Long studentId, @PathVariable Long examId) {
        service.addExamToStudent(studentId, examId);
        return new ResponseEntity<>("Exam successfully added to student", HttpStatus.OK);
    }

    @PutMapping("/admin/students/{studentId}/payments/add/{paymentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addPaymentToStudent(@PathVariable Long studentId, @PathVariable Long paymentId) {
        service.addPaymentToStudent(studentId, paymentId);
        return new ResponseEntity<>("Payment successfully added to student", HttpStatus.OK);
    }
}
