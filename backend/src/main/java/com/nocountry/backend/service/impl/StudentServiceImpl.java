package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.mapper.CourseMapper;
import com.nocountry.backend.mapper.ExamMapper;
import com.nocountry.backend.mapper.PaymentMapper;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.model.Exam;
import com.nocountry.backend.model.Payment;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.ICourseRepository;
import com.nocountry.backend.repository.IExamRepository;
import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IStudentService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {

    private final IStudentRepository studentRepository;
    private final ICourseRepository courseRepository;
    private final IExamRepository examRepository;
    private final IPaymentRepository paymentRepository;

    private final StudentMapper studentMapper;
    private final CourseMapper courseMapper;
    private final ExamMapper examMapper;
    private final PaymentMapper paymentMapper;

    private Student findStudentById(Long studentId) {
        return studentRepository.findById(studentId)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
    }

    @Override
    public StudentDto getStudent(Long StudentId) {
        return studentMapper.convertToDto(this.findStudentById(StudentId));
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return studentMapper.convertToDtoList(studentRepository.findAll());
    }

    @Override
    public StudentDto updateStudent(StudentDto studentDto, Long studentId) {
        Student updatedStudent = this.findStudentById(studentId);
        updatedStudent.setFirstName(studentDto.getFirstName());
        updatedStudent.setLastName(studentDto.getLastName());
        updatedStudent.setDni(studentDto.getDni());
        updatedStudent.setBirthdate(studentDto.getBirthdate());
        updatedStudent.setAddress(studentDto.getAddress());
        updatedStudent.setPhone(studentDto.getPhone());
        updatedStudent.setLevel(studentDto.getLevel());
        updatedStudent.setImageUrl(studentDto.getImageUrl());
        return studentMapper.convertToDto(studentRepository.save(updatedStudent));

    }

    @Override
    public void deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
    }

    @Override
    public CourseDto getCourseByStudentId(Long studentId) {
        return courseMapper.convertToDto(courseRepository.findByStudentId(studentId));
    }

    @Override
    public List<ExamDto> getExamsByStudentId(Long studentId) {
        return examMapper.convertToDtoList(examRepository.findAllByStudentId(studentId));
    }

    @Override
    public List<PaymentDto> getPaymentsByStudentId(Long studentId) {
        return paymentMapper.convertToDtoList(paymentRepository.findAllByStudentId(studentId));
    }

    @Override
    public void addExamToStudent(Long studentId, Long examId) {
        Student student = this.findStudentById(studentId);
        Exam exam = examRepository.findById(examId)
                .orElseThrow(() -> new EntityNotFoundException("Exam not found"));
        exam.setStudent(student);
        student.addExam(exam);
        examRepository.save(exam);
        studentRepository.save(student);
    }

    @Override
    public void addPaymentToStudent(Long studentId, Long paymentId) {
        Student student = this.findStudentById(studentId);
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new EntityNotFoundException("Payment not found"));
        payment.setStudent(student);
        student.addPayment(payment);
        paymentRepository.save(payment);
        studentRepository.save(student);
    }
}