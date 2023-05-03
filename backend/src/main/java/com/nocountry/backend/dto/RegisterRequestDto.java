package com.nocountry.backend.dto;

<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentDetailsDto.java
import java.util.List;

import com.nocountry.backend.utils.enums.Level;
========
import com.nocountry.backend.util.enums.Level;
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/RegisterRequestDto.java

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentDetailsDto.java
public class StudentDetailsDto {
========
public class RegisterRequestDto {
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/RegisterRequestDto.java

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private Long dni;

    private String address;

    private String phone;

    private String birthdate;

    private Level level;
<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentDetailsDto.java

    private Long courseId;

    private List<ExamListDto> exams;

    private List<PaymentListDto> payments;
}
========
}
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/RegisterRequestDto.java
