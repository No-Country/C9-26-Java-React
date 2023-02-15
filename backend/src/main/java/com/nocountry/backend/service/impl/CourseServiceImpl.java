package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.mapper.CourseMapper;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.model.Teacher;
import com.nocountry.backend.repository.ICourseRepository;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.repository.ITeacherRepository;
import com.nocountry.backend.service.ICourseService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final ICourseRepository courseRepository;

    private final IStudentRepository studentRepository;

    private final ITeacherRepository teacherRepository;

    private final CourseMapper courseMapper;

    private final StudentMapper studentMapper;

    private Course findCourseById(Long courseId) {
        return courseRepository.findById(courseId)
                .orElseThrow(() -> new EntityNotFoundException("Course not found"));
    }

    @Override
    public CourseDto getCourse(Long courseId) {
        return courseMapper.convertToDto(this.findCourseById(courseId));
    }

    @Override
    public List<CourseDto> getAllCourses() {
        return courseMapper.convertToDtoList(courseRepository.findAll());
    }

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        return courseMapper.convertToDto(courseRepository.save(courseMapper.convertToEntity(courseDto)));
    }

    @Override
    public CourseDto updateCourse(CourseDto courseDto, Long courseId) {
        Course updatedCourse = this.findCourseById(courseId);
        updatedCourse.setCategory(courseDto.getCategory());
        updatedCourse.setMode(courseDto.getMode());
        updatedCourse.setCourseDays(courseDto.getCourseDays());
        updatedCourse.setSchedule(courseDto.getSchedule());
        updatedCourse.setLevel(courseDto.getLevel());
        return courseMapper.convertToDto(courseRepository.save(updatedCourse));
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }

    @Override
    public List<StudentDto> getStudentsByCourseId(Long courseId) {
        return studentMapper.convertToDtoList(studentRepository.findAllByCourseId(courseId));
    }

    @Override
    public void addStudentToCourse(Long courseId, Long studentId) {
        Course course = this.findCourseById(courseId);
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
        student.setCourse(course);
        course.addStudent(student);
        studentRepository.save(student);
        courseRepository.save(course);
    }

    @Override
    public void setTeacherToCourse(Long courseId, Long TeacherId) {
        Course course = this.findCourseById(courseId);
        Teacher teacher = teacherRepository.findById(TeacherId)
                .orElseThrow(() -> new EntityNotFoundException("Teacher not found"));
        teacher.addCourse(course);
        course.setTeacher(teacher);
        teacherRepository.save(teacher);
        courseRepository.save(course);
    }
}
