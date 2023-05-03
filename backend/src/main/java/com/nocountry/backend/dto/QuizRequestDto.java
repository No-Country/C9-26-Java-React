package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
<<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/StudentListDto.java
public class StudentListDto {

    private Long id;

    private String firstName;

    private String lastName;
========
public class QuizRequestDto {

    private String quizName;
>>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/QuizRequestDto.java
}
