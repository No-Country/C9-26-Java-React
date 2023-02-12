package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.CourseDto;
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
    public List<CourseDto> getAll() {
        return null;
    }

    @Override
    public CourseDto getById(Long id) {
        return null;
    }

    @Override
    public CourseDto create(CourseDto course) {
        return null;
    }

    @Override
    public CourseDto update(CourseDto course, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
