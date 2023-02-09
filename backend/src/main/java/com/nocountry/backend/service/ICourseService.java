package com.nocountry.backend.service;

import com.nocountry.backend.dto.CourseDto;
import java.util.List;

public interface ICourseService {

    public List<CourseDto> getAll();

    public CourseDto getById(Long id);

    public CourseDto create(CourseDto course);

    public CourseDto update(CourseDto course, Long id);

    public void delete(Long id);
}
