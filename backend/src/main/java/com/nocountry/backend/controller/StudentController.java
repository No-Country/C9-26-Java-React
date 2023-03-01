package com.nocountry.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;
import com.nocountry.backend.service.IStudentService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService studentService;

    private final JwtProvider jwtProvider;

    // FOR STUDENTS

    @PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
    @GetMapping("/token/")
    public ResponseEntity<StudentDetailsDto> getStudentByEmail(@RequestHeader("Authorization") String token) {
        String email = jwtProvider.extractUsername(token.substring(7));
        return new ResponseEntity<>(studentService.getStudentByEmail(email), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
    @PatchMapping("/token/update")
    public ResponseEntity<StudentDetailsDto> updateStudentByEmail(@RequestHeader("Authorization") String token,
            @RequestBody StudentDetailsDto studentDetailsDto) {
        String email = jwtProvider.extractUsername(token.substring(7));
        return new ResponseEntity<>(studentService.updateStudentByEmail(email, studentDetailsDto), HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
    @PatchMapping("/token/quizzes")
    public ResponseEntity<String> updateQuizStatusByEmail(@RequestHeader("Authorization") String token,
            Boolean status) {
        String email = jwtProvider.extractUsername(token.substring(7));
        studentService.updateQuizStatusByEmail(email, status);
        return new ResponseEntity<>("Quiz has been successfully updated", HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
    @PatchMapping(value = "/admin/{studentId}/updateImageProfile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<StudentDetailsDto> updateUserImage(
            @PathVariable(value = "studentId") Long studentId,
            @ModelAttribute StudentDetailsDto studentDetailsDto,
            @RequestParam(name = "file", required = false) MultipartFile file) throws IOException {
        return new ResponseEntity<>(studentService.updateStudentByIdWithImage(studentId, studentDetailsDto, file),
                HttpStatus.OK);
    }
    // FOR ADMIN

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/all")
    public ResponseEntity<List<StudentListDto>> getAllStudents() {
        return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/{studentId}")
    public ResponseEntity<StudentDetailsDto> getStudentById(@PathVariable Long studentId) {
        return new ResponseEntity<>(studentService.getStudentById(studentId), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/{studentId}/update")
    public ResponseEntity<StudentDetailsDto> updateStudentById(@PathVariable Long studentId,
            @RequestBody StudentDetailsDto studentDetailsDto) {
        return new ResponseEntity<>(studentService.updateStudentById(studentId, studentDetailsDto), HttpStatus.OK);
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
