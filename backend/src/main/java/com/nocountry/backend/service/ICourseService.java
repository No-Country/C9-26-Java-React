package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.CourseDto;

public interface ICourseService {

    Optional<CourseDto> getCourse(Long courseId);

    List<CourseDto> getAllCourses();

    CourseDto createCourse(CourseDto courseDto);

    CourseDto updateCourse(CourseDto courseDto, Long courseId);

    void deleteCourse(Long courseId);

    void addStudentToCourse(Long courseId, Long studentId);

    void addTeacherToCourse(Long courseId, Long teacherId);
}
