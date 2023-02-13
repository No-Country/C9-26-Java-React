package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.utils.MapperUtil;

@Component
public class CourseMapper {

    public CourseDto convertEntityToDto(Course course) {
        return MapperUtil.map(course, CourseDto.class);
    }

    public Course convertDtoToEntity(CourseDto courseDTO) {
        return MapperUtil.map(courseDTO, Course.class);
    }

    public List<CourseDto> convertToDtoList(List<Course> courseList) {
        return MapperUtil.mapList(courseList, CourseDto.class);
    }

    public List<Course> convertToEntityList(List<CourseDto> courseDto) {
        return MapperUtil.mapList(courseDto, Course.class);
    }
}
