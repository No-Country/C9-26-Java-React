package com.nocountry.backend.dto;

<<<<<<< HEAD
<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentDetailsDto.java
import java.util.List;

import com.nocountry.backend.utils.enums.Level;
========
import com.nocountry.backend.util.enums.Level;
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/RegisterRequestDto.java
=======
import java.util.List;
import java.util.Map;

import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.util.enums.Level;
>>>>>>> backend-develop

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
<<<<<<< HEAD
<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentDetailsDto.java
public class StudentDetailsDto {
========
public class RegisterRequestDto {
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/RegisterRequestDto.java

    private String username;

    private String password;
=======
public class StudentDetailsDto {

    private Long id;
>>>>>>> backend-develop

    private String firstName;

    private String lastName;

<<<<<<< HEAD
=======
    private MediaResource imageResource;

>>>>>>> backend-develop
    private Long dni;

    private String address;

<<<<<<< HEAD
=======
    private String email;

>>>>>>> backend-develop
    private String phone;

    private String birthdate;

    private Level level;
<<<<<<< HEAD
<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentDetailsDto.java

    private Long courseId;
=======

    private Map<String, String> quizzesStatus;

    private CourseStudentDto course;
>>>>>>> backend-develop

    private List<ExamListDto> exams;

    private List<PaymentListDto> payments;
}
<<<<<<< HEAD
========
}
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/RegisterRequestDto.java
=======
>>>>>>> backend-develop
