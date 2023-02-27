package com.nocountry.backend.dto;

import com.nocountry.backend.model.MediaResource;
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

    private MediaResource videoResource;

    private String questionsAndAnswers;
}
