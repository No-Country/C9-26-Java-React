package com.nocountry.backend.service;

import java.io.IOException;
import java.util.List;

import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;
import org.springframework.web.multipart.MultipartFile;

public interface IStudentService {

    StudentDetailsDto getStudentByEmail(String email);

    StudentDetailsDto updateStudentByEmail(String email, StudentDetailsDto studentDetailsDto);

    StudentDetailsDto updateStudentImageByEmail(
            String email,
            StudentDetailsDto studentDetailsDto,
            MultipartFile file) throws IOException;

    void updateQuizStatusByEmail(String email, Boolean status);

    List<StudentListDto> getAllStudents();

    StudentDetailsDto getStudentById(Long studentId);

    StudentDetailsDto updateStudentById(Long studentId, StudentDetailsDto studentDetailsDto);

    void addExamToStudent(Long studentId, Long examId);

    void addPaymentToStudent(Long studentId, Long paymentId);

    void deleteStudent(Long studentId);
}
