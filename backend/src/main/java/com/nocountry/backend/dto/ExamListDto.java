package com.nocountry.backend.dto;

import com.nocountry.backend.utils.enums.Rating;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExamListDto {

    private Long id;

    private String name;

    private String examDate;

    private Rating grammar;

    private Rating speaking;

    private Rating writing;

    private Rating listening;
}
