package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CourseDetailsDto;

public interface ICourseService {

    List<CourseDetailsDto> getAllCourses();

    CourseDetailsDto getCourseById(Long courseId);

    CourseDetailsDto createCourse(CourseDetailsDto courseDto);

    CourseDetailsDto updateCourse(Long courseId, CourseDetailsDto courseDto);

    void addStudentToCourse(Long courseId, Long studentId);

    void addTeacherToCourse(Long courseId, Long teacherId);

    void deleteCourse(Long courseId);
}
