package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.dto.StudentDto;

public interface IStudentService {

    StudentDto getStudent(Long studentId);

    List<StudentDto> getAllStudents();

    StudentDto updateStudent(StudentDto studentDto, Long studentId);

    void deleteStudent(Long studentId);

    CourseDto getCourseByStudentId(Long studentId);

    List<ExamDto> getExamsByStudentId(Long studentId);

    List<PaymentDto> getPaymentsByStudentId(Long studentId);

    void addExamToStudent(Long studentId, Long examId);

    void addPaymentToStudent(Long studentId, Long paymentId);
}
