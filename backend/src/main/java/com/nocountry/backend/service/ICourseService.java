package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentDto;

public interface ICourseService {

    CourseDto getCourse(Long courseId);

    List<CourseDto> getAllCourses();

    CourseDto createCourse(CourseDto courseDto);

    CourseDto updateCourse(CourseDto courseDto, Long courseId);

    void deleteCourse(Long courseId);

    List<StudentDto> getStudentsByCourseId(Long courseId);

    void addStudentToCourse(Long courseId, Long studentId);

    void setTeacherToCourse(Long courseId, Long teacherId);

}
