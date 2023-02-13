package com.nocountry.backend.dto;

import com.nocountry.backend.enums.Level;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {

    private Long id;

    private String name;

    private Level level;

    private String mode;

    private String courseDays;

    private String schedule;
}
