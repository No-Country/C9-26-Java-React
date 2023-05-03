package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

<<<<<<< HEAD
import com.nocountry.backend.dto.CourseDto;
=======
import com.nocountry.backend.dto.CourseDetailsDto;
>>>>>>> backend-develop
import com.nocountry.backend.mapper.CourseMapper;
import com.nocountry.backend.repository.ICourseRepository;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.repository.ITeacherRepository;
import com.nocountry.backend.service.ICourseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final ICourseRepository courseRepository;

    private final IStudentRepository studentRepository;

    private final ITeacherRepository teacherRepository;

    private final CourseMapper courseMapper;

    @Override
<<<<<<< HEAD
    public List<CourseDto> getAllCourses() {
=======
    public List<CourseDetailsDto> getAllCourses() {
>>>>>>> backend-develop
        return courseMapper.convertToDtoList(courseRepository.findAll());
    }

    @Override
<<<<<<< HEAD
    public CourseDto getCourseById(Long courseId) {
        return courseMapper.convertToDto(courseRepository.findById(courseId).orElseThrow());
    }

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        var course = courseMapper.convertToEntity(courseDto);
        return courseMapper.convertToDto(courseRepository.save(course));
    }

    @Override
    public CourseDto updateCourse(Long courseId, CourseDto courseDto) {
        return null;
=======
    public CourseDetailsDto getCourseById(Long courseId) {
        return courseMapper.convertToDto(courseRepository.findById(courseId).orElseThrow());
    }

    @Override
    public CourseDetailsDto createCourse(CourseDetailsDto courseDto) {
        var course = courseMapper.convertToEntity(courseDto);
        return courseMapper.convertToDto(courseRepository.save(course));
    }

    @Override
    public CourseDetailsDto updateCourse(Long courseId, CourseDetailsDto courseDto) {
        var course = courseRepository.findById(courseId).orElseThrow();

        if (courseDto.getCategory() != null) {
            course.setCategory(courseDto.getCategory());
        }

        if (courseDto.getLevel() != null) {
            course.setLevel(courseDto.getLevel());
        }

        if (courseDto.getMode() != null) {
            course.setMode(courseDto.getMode());
        }

        if (courseDto.getCourseDays() != null) {
            course.setCourseDays(courseDto.getCourseDays());
        }

        if (courseDto.getSchedule() != null) {
            course.setSchedule(courseDto.getSchedule());
        }

        return courseMapper.convertToDto(courseRepository.save(course));
>>>>>>> backend-develop
    }

    @Override
    public void addStudentToCourse(Long courseId, Long studentId) {
        var course = courseRepository.findById(courseId).orElseThrow();
        var student = studentRepository.findById(studentId).orElseThrow();
        student.setCourse(course);
        course.addStudent(student);
        studentRepository.save(student);
        courseRepository.save(course);
    }

    @Override
    public void addTeacherToCourse(Long courseId, Long TeacherId) {
        var course = courseRepository.findById(courseId).orElseThrow();
        var teacher = teacherRepository.findById(TeacherId).orElseThrow();
        teacher.addCourse(course);
        course.setTeacher(teacher);
        teacherRepository.save(teacher);
        courseRepository.save(course);
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }
}
