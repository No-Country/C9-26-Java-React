package com.nocountry.backend.service;

import com.nocountry.backend.dto.CourseDto;

import java.util.List;
import java.util.Optional;

public interface ICourseService {

    List<CourseDto> getAll();

    Optional<CourseDto> getById(Long id);

    CourseDto create(CourseDto course);

    CourseDto update(CourseDto course, Long id);

    void delete(Long id);


}
