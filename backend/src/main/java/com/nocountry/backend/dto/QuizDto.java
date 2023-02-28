package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuizDto {

    private Long id;

    private String title;

    private Boolean completed;

    private Long studentId;

    private String studentFirstName;

    private String studentLastName;
}
