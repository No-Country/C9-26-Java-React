package com.nocountry.backend.dto;

import java.util.List;

import com.nocountry.backend.model.Course;
import com.nocountry.backend.model.Exam;
import com.nocountry.backend.model.Payment;
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

    private String imageUrl;

    private Long dni;

    private String address;

    private String email;

    private String phone;

    private String birthdate;

    private Level level;

    private Course course;

    private List<Exam> exams;

    private List<Payment> payments;
}
