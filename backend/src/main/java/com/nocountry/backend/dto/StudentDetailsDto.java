package com.nocountry.backend.dto;

import java.util.List;
import java.util.Map;

import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.utils.enums.Level;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentDetailsDto {

    private Long id;

    private String firstName;

    private String lastName;

    private MediaResource imageResource;

    private Long dni;

    private String address;

    private String email;

    private String phone;

    private String birthdate;

    private Level level;

    private Map<String, String> quizzesStatus;

    private CourseStudentDto course;

    private List<ExamListDto> exams;

    private List<PaymentListDto> payments;
}
