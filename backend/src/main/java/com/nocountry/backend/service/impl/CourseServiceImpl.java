package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.mapper.CourseMapper;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.repository.ICourseRepository;
import com.nocountry.backend.service.ICourseService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final ICourseRepository repository;

    private final CourseMapper mapper;

    @Override
    public List<CourseDto> getAll() { return mapper.convertToDtoList(repository.findAll()); }

    @Override
    public Optional<CourseDto> getById(Long id) {
        return Optional.ofNullable(mapper.convertToDto(repository.getReferenceById(id)));
    }
    @Override
    public CourseDto create(CourseDto course) {
        return mapper.convertToDto(repository.save(mapper.convertDtoToEntity(course)));
    }


    @Override
    public CourseDto update(CourseDto course, Long id) {
        Course updatedCourse= repository.findById(id).orElseThrow(EntityNotFoundException::new);
        updatedCourse.setName(course.getName());
        updatedCourse.setSchedule(course.getSchedule());
        updatedCourse.setMode(course.getMode());
        updatedCourse.setMonthlyFee(course.getMonthlyFee());
        updatedCourse.setTuitionFee(course.getTuitionFee());
        updatedCourse.setLevel(course.getLevel());
        return  mapper.convertToDto(repository.save(updatedCourse));
    }

    @Override
    public void delete(Long id) { repository.deleteById(id);  }
}
