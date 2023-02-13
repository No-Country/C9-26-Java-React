package com.nocountry.backend.service.impl;

import com.nocountry.backend.model.Course;
import com.nocountry.backend.repository.ICourseRepository;
import com.nocountry.backend.service.ICourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final ICourseRepository repository;

    @Override
    public Course getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Course> getAll() {
        return repository.findAll();
    }

    @Override
    public Course create(Course course) {
        return null;
    }

    @Override
    public Course update(Course course, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
