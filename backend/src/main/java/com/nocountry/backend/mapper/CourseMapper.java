package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.CourseDetailsDto;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.utils.MapperUtil;

@Component
public class CourseMapper {

    public CourseDetailsDto convertToDto(Course course) {
        return MapperUtil.map(course, CourseDetailsDto.class);
    }

    public Course convertToEntity(CourseDetailsDto courseDto) {
        return MapperUtil.map(courseDto, Course.class);
    }

    public List<CourseDetailsDto> convertToDtoList(List<Course> courseList) {
        return MapperUtil.mapList(courseList, CourseDetailsDto.class);
    }

    public List<Course> convertToEntityList(List<CourseDetailsDto> courseDtoList) {
        return MapperUtil.mapList(courseDtoList, Course.class);
    }
}
