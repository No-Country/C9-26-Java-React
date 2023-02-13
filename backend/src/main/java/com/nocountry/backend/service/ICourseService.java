package com.nocountry.backend.service;

import com.nocountry.backend.dto.CourseDto;
import java.util.List;
import java.util.Optional;

public interface ICourseService {

    Optional<CourseDto> getById(Long id);

    List<CourseDto> getAll();

    CourseDto create(CourseDto course);

    CourseDto update(CourseDto course, Long id);

    void delete(Long id);
}
