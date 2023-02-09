package com.nocountry.backend.service.impl;


import com.nocountry.backend.model.Course;
import com.nocountry.backend.repository.CourseRepository;
import com.nocountry.backend.service.CourseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    private final CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public List<Course> getAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course update(Course newCourse, Long id){
        return courseRepository.findById(id)
                .map(Course -> {
                    Course.setName(newCourse.getName());
                    Course.setMode(newCourse.getMode());
                    Course.setDescription(newCourse.getDescription());
                    Course.setTuitionFee(newCourse.getTuitionFee());
                    Course.setMonthlyFee(newCourse.getMonthlyFee());
                    Course.setSchedule(newCourse.getSchedule());
                    Course.setTeacher(newCourse.getTeacher());
                    Course.setStudents(newCourse.getStudents());
                    return courseRepository.save(newCourse);
                }).get();
    }

    @Override
    public Course create(Course nuevo) {
        return courseRepository.save(nuevo);
    }

    @Override
    public void delete(Long id) {
        courseRepository.deleteById(id);
    }


    @Override
    public Course getById(Long id) {
        return courseRepository.getReferenceById(id);
    }
}
