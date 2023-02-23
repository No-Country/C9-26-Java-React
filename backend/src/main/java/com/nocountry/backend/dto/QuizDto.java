package com.nocountry.backend.dto;

import java.util.Map;

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

    private String description;

    private String videoUrl;

    private Map<String, String> questionsAndAnswers;
}
