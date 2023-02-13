package com.nocountry.backend.service;

import com.nocountry.backend.model.Course;
import java.util.List;

public interface ICourseService {

    public Course getById(Long id);

    public List<Course> getAll();

    public Course create(Course course);

    public Course update(Course course, Long id);

    public void delete(Long id);
}
