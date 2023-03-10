package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExamDetailsDto {

    private Long id;

    private String name;

    private String examDate;

    private String grammar;

    private String speaking;

    private String writing;

    private String listening;

    private Boolean status;

    private Long studentId;

    private String studentFirstName;

    private String studentLastName;
}
