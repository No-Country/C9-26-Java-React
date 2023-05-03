package com.nocountry.backend.dto;

import java.util.List;

import com.nocountry.backend.util.enums.Level;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDto {

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private Long dni;

    private String address;

    private String phone;

    private String birthdate;

    private Level level;

    private Long courseId;

    private List<ExamListDto> exams;

    private List<PaymentListDto> payments;
}
