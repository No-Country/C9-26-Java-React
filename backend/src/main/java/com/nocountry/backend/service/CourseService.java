package com.nocountry.backend.service;

import com.nocountry.backend.model.Course;

import java.util.List;

public interface CourseService {
    List<Course> getAll();

    Course update(Course nuevo, Long id);

    Course create(Course nuevo);

    void delete(Long id);

    Course getById(Long id);
}
