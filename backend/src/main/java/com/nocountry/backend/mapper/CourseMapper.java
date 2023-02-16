package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.utils.MapperUtil;

@Component
public class CourseMapper {

    public CourseDto convertToDto(Course course) {
        return MapperUtil.map(course, CourseDto.class);
    }

    public Course convertToEntity(CourseDto courseDto) {
        return MapperUtil.map(courseDto, Course.class);
    }

    public List<CourseDto> convertToDtoList(List<Course> courseList) {
        return MapperUtil.mapList(courseList, CourseDto.class);
    }

    public List<Course> convertToEntityList(List<CourseDto> courseDtoList) {
        return MapperUtil.mapList(courseDtoList, Course.class);
    }
}
