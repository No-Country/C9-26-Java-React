package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Course;

public interface ICourseRepository extends JpaRepository<Course, Long> {

    public Course findByStudentId(Long studentId);
}
