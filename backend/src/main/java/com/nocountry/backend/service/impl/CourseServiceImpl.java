package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentListDto;
import com.nocountry.backend.mapper.CourseMapper;
import com.nocountry.backend.mapper.StudentMapper;
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

    private final StudentMapper studentMapper;

    @Override
    public List<CourseDto> getAllCourses() {
        return courseMapper.convertToDtoList(courseRepository.findAll());
    }

    @Override
    public CourseDto getCourseById(Long courseId) {
        return courseMapper.convertToDto(courseRepository.findById(courseId).orElseThrow());
    }

    @Override
    public List<StudentListDto> getStudentsByCourseId(Long courseId) {
        var course = courseRepository.findById(courseId).orElseThrow();
        return studentMapper.convertToDtoList(course.getStudents());
    }

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        var course = courseMapper.convertToEntity(courseDto);
        return courseMapper.convertToDto(courseRepository.save(course));
    }

    @Override
    public CourseDto updateCourse(Long courseId, CourseDto courseDto) {
        return null;
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
