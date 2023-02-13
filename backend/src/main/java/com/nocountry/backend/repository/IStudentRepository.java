package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Student;

public interface IStudentRepository extends JpaRepository<Student, Long> {

    List<Student> findAllByCourseId(Long courseId);
}
