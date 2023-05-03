package com.nocountry.backend.dto;

<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/dto/CourseDto.java
import java.util.List;

import com.nocountry.backend.utils.enums.Level;
=======
import com.nocountry.backend.util.enums.Level;
>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/dto/CourseTeacherDto.java

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseTeacherDto {

    private Long id;

    private String category;

    private Level level;

    private String mode;

    private String courseDays;

    private String schedule;

    private Long teacherId;

    private List<StudentListDto> students;
}
