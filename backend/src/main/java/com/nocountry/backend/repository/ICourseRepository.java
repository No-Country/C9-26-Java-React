package com.nocountry.backend.repository;

import com.nocountry.backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICourseRepository extends JpaRepository<Course, Long> {
}
