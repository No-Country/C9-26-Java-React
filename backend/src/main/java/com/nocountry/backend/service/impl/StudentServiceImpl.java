package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.IExamRepository;
import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IStudentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {

    private final StudentMapper studentMapper;

    private final IStudentRepository studentRepository;

    private final IExamRepository examRepository;

    private final IPaymentRepository paymentRepository;

    @Override
    public StudentDetailsDto getStudentByEmail(String email) {
        return studentMapper.convertToDto(studentRepository.findByEmail(email).orElseThrow());
    }

    @Override
    public StudentDetailsDto updateStudentByEmail(String email, StudentDetailsDto studentDetailsDto) {
        var student = studentRepository.findByEmail(email).orElseThrow();
        return this.updateStudent(student, studentDetailsDto);
    }

    @Override
    public List<StudentListDto> getAllStudents() {
        return studentMapper.convertToDtoList(studentRepository.findAll());
    }

    @Override
    public StudentDetailsDto getStudentById(Long studentId) {
        return studentMapper.convertToDto(studentRepository.findById(studentId).orElseThrow());
    }

    @Override
    public StudentDetailsDto updateStudentById(Long studentId, StudentDetailsDto studentDetailsDto) {
        var student = studentRepository.findById(studentId).orElseThrow();
        return this.updateStudent(student, studentDetailsDto);
    }

    @Override
    public void addExamToStudent(Long studentId, Long examId) {
        var student = studentRepository.findById(studentId).orElseThrow();
        var exam = examRepository.findById(examId).orElseThrow();
        exam.setStudent(student);
        student.addExam(exam);
        examRepository.save(exam);
        studentRepository.save(student);
    }

    @Override
    public void addPaymentToStudent(Long studentId, Long paymentId) {
        var student = studentRepository.findById(studentId).orElseThrow();
        var payment = paymentRepository.findById(paymentId).orElseThrow();
        payment.setStudent(student);
        student.addPayment(payment);
        paymentRepository.save(payment);
        studentRepository.save(student);
    }

    @Override
    public void deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
    }

    private StudentDetailsDto updateStudent(Student student, StudentDetailsDto StudentDetailsDto) {

        if (StudentDetailsDto.getFirstName() != null) {
            student.setFirstName(StudentDetailsDto.getFirstName());
        }

        if (StudentDetailsDto.getLastName() != null) {
            student.setLastName(StudentDetailsDto.getLastName());
        }

        if (StudentDetailsDto.getImageUrl() != null) {
            student.setImageUrl(StudentDetailsDto.getImageUrl());
        }

        if (StudentDetailsDto.getDni() != null) {
            student.setDni(StudentDetailsDto.getDni());
        }

        if (StudentDetailsDto.getAddress() != null) {
            student.setAddress(StudentDetailsDto.getAddress());
        }

        if (StudentDetailsDto.getEmail() != null) {
            student.setEmail(StudentDetailsDto.getEmail());
        }

        if (StudentDetailsDto.getPhone() != null) {
            student.setPhone(StudentDetailsDto.getPhone());
        }

        if (StudentDetailsDto.getBirthdate() != null) {
            student.setBirthdate(StudentDetailsDto.getBirthdate());
        }

        if (StudentDetailsDto.getLevel() != null) {
            student.setLevel(StudentDetailsDto.getLevel());
        }

        return studentMapper.convertToDto(studentRepository.save(student));
    }
}