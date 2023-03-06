package com.nocountry.backend.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.nocountry.backend.dto.QuizRequestDto;
import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;

public interface IStudentService {

    StudentDetailsDto getStudentByEmail(String email);

    StudentDetailsDto updateStudentByEmail(String email, StudentDetailsDto studentDetailsDto);

    void updateStudentImageByEmail(String email, MultipartFile file) throws IOException;

    void updateQuizStatusByEmail(String email, QuizRequestDto quizName);

    List<StudentListDto> getAllStudents();

    StudentDetailsDto getStudentById(Long studentId);

    StudentDetailsDto updateStudentById(Long studentId, StudentDetailsDto studentDetailsDto);

    void addExamToStudent(Long studentId, Long examId);

    void addPaymentToStudent(Long studentId, Long paymentId);

    void deleteStudent(Long studentId);
}
