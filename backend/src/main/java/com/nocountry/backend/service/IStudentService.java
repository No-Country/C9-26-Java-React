package com.nocountry.backend.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.nocountry.backend.dto.QuizRequestDto;
import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;

public interface IStudentService {

    public StudentDetailsDto getStudentByEmail(String email);

    public StudentDetailsDto updateStudentByEmail(String email, StudentDetailsDto studentDetailsDto);

    public void updateStudentImageByEmail(String email, MultipartFile file) throws IOException;

    public void updateQuizStatusByEmail(String email, QuizRequestDto quizName);

    public List<StudentListDto> getAllStudents();

    public StudentDetailsDto getStudentById(Long studentId);

    public StudentDetailsDto updateStudentById(Long studentId, StudentDetailsDto studentDetailsDto);

    public void addExamToStudent(Long studentId, Long examId);

    public void addPaymentToStudent(Long studentId, Long paymentId);

    public void deleteStudent(Long studentId);
}
