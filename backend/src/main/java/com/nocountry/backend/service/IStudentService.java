package com.nocountry.backend.service;

import java.io.IOException;
import java.util.List;

<<<<<<< HEAD
=======
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.backend.dto.QuizRequestDto;
>>>>>>> backend-develop
import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;

public interface IStudentService {

<<<<<<< HEAD
    List<StudentListDto> getAllStudents();

    StudentDetailsDto getStudentByEmail(String email);

    StudentDetailsDto updateStudent(String email, StudentDetailsDto studentDetailsDto);
=======
    public StudentDetailsDto getStudentByEmail(String email);

    public StudentDetailsDto updateStudentByEmail(String email, StudentDetailsDto studentDetailsDto);

    public void updateStudentImageByEmail(String email, MultipartFile file) throws IOException;

    public void updateQuizStatusByEmail(String email, QuizRequestDto quizName);

    public List<StudentListDto> getAllStudents();

    public StudentDetailsDto getStudentById(Long studentId);

    public StudentDetailsDto updateStudentById(Long studentId, StudentDetailsDto studentDetailsDto);
>>>>>>> backend-develop

    public void addExamToStudent(Long studentId, Long examId);

<<<<<<< HEAD
    void addPaymentToStudent(Long studentId, Long paymentId);

    void deleteStudent(Long studentId);
=======
    public void addPaymentToStudent(Long studentId, Long paymentId);

    public void deleteStudent(Long studentId);
>>>>>>> backend-develop
}
