package com.nocountry.backend.service;

import java.util.List;

<<<<<<< HEAD
import com.nocountry.backend.dto.CourseDto;

public interface ICourseService {

    List<CourseDto> getAllCourses();

    CourseDto getCourseById(Long courseId);

    CourseDto createCourse(CourseDto courseDto);

    CourseDto updateCourse(Long courseId, CourseDto courseDto);

    void addStudentToCourse(Long courseId, Long studentId);

    void addTeacherToCourse(Long courseId, Long teacherId);

    void deleteCourse(Long courseId);
=======
import com.nocountry.backend.dto.CourseDetailsDto;

public interface ICourseService {

    public List<CourseDetailsDto> getAllCourses();

    public CourseDetailsDto getCourseById(Long courseId);

    public CourseDetailsDto createCourse(CourseDetailsDto courseDto);

    public CourseDetailsDto updateCourse(Long courseId, CourseDetailsDto courseDto);

    public void addStudentToCourse(Long courseId, Long studentId);

    public void addTeacherToCourse(Long courseId, Long teacherId);

    public void deleteCourse(Long courseId);
>>>>>>> backend-develop
}
