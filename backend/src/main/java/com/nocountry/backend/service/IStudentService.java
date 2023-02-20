package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;

public interface IStudentService {

    List<StudentListDto> getAllStudents();

    StudentDetailsDto getStudentByEmail(String email);

    StudentDetailsDto updateStudent(String email, StudentDetailsDto studentDetailsDto);

    void addExamToStudent(Long studentId, Long examId);

    void addPaymentToStudent(Long studentId, Long paymentId);

    void deleteStudent(Long studentId);
}
