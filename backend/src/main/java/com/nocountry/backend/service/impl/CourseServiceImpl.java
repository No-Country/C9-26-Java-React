package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.mapper.CourseMapper;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.model.Course;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.ICourseRepository;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.ICourseService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final ICourseRepository courseRepository;

    private final IStudentRepository studentRepository;

    private final CourseMapper courseMapper;

    private final StudentMapper studentMapper;

    @Override
    public Optional<CourseDto> getCourseById(Long courseId) {
        return Optional.ofNullable(courseMapper.convertEntityToDto(courseRepository.getReferenceById(courseId)));
    }

    @Override
    public List<CourseDto> getAllCourses() {
        return courseMapper.convertToDtoList(courseRepository.findAll());
    }

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        return courseMapper.convertEntityToDto(courseRepository.save(courseMapper.convertDtoToEntity(courseDto)));
    }

    @Override
    public CourseDto updateCourse(CourseDto courseDto, Long courseId) {
        Course updatedCourse = courseRepository.findById(courseId)
                .orElseThrow(() -> new EntityNotFoundException("Course not found"));
        updatedCourse.setName(courseDto.getName());
        updatedCourse.setMode(courseDto.getMode());
        updatedCourse.setCourseDays(courseDto.getCourseDays());
        updatedCourse.setSchedule(courseDto.getSchedule());
        updatedCourse.setLevel(courseDto.getLevel());
        return courseMapper.convertEntityToDto(courseRepository.save(updatedCourse));
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }

    public List<StudentDto> getStudentsByCourseId(Long courseId) {
        List<Student> allStudents = studentRepository.findAllByCourseId(courseId);
        return studentMapper.convertToDtoList(allStudents);
    }

    public void addStudentToCourse(Long courseId, StudentDto studentDto) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new EntityNotFoundException("Course not found"));
        Student student = studentMapper.convertDtoToEntity(studentDto);
        student.setCourse(course);
        studentRepository.save(student);
    }
}
