package com.nocountry.backend.mapper;


import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.utils.MapperUtil;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CourseMapper {

    public CourseDto convertToDto(Course course) {
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
