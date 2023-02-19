package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentListDto;

public interface ICourseService {

    List<CourseDto> getAllCourses();

    CourseDto getCourseById(Long courseId);

    List<StudentListDto> getStudentsByCourseId(Long courseId);

    CourseDto createCourse(CourseDto courseDto);

    CourseDto updateCourse(Long courseId, CourseDto courseDto);

    void addStudentToCourse(Long courseId, Long studentId);

    void addTeacherToCourse(Long courseId, Long teacherId);

    void deleteCourse(Long courseId);
}
