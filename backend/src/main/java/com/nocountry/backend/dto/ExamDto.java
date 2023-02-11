package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExamDto {

    private Long id;

    private String name;

    private String examDate;

    private Double examFee;

    private Integer grammarNote;

    private Integer speakingNote;

    private Integer writingNote;

    private Integer listeningNote;

    private Boolean status;
}
