package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CourseDetailsDto;

public interface ICourseService {

    public List<CourseDetailsDto> getAllCourses();

    public CourseDetailsDto getCourseById(Long courseId);

    public CourseDetailsDto createCourse(CourseDetailsDto courseDto);

    public CourseDetailsDto updateCourse(Long courseId, CourseDetailsDto courseDto);

    public void addStudentToCourse(Long courseId, Long studentId);

    public void addTeacherToCourse(Long courseId, Long teacherId);

    public void deleteCourse(Long courseId);
}
