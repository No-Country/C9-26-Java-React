package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;

public interface IStudentService {

    StudentDetailsDto getStudentByEmail(String email);

    StudentDetailsDto updateStudentByEmail(String email, StudentDetailsDto studentDetailsDto);

    List<StudentListDto> getAllStudents();

    StudentDetailsDto getStudentById(Long studentId);

    StudentDetailsDto updateStudentById(Long studentId, StudentDetailsDto studentDetailsDto);

    void addExamToStudent(Long studentId, Long examId);

    void addPaymentToStudent(Long studentId, Long paymentId);

    void deleteStudent(Long studentId);
}
