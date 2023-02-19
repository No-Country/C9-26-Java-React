package com.nocountry.backend.dto;

import java.util.List;

import com.nocountry.backend.model.Course;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TeacherDto {

    private Long id;

    private String firstName;

    private String lastName;

    private List<Course> courses;
}
