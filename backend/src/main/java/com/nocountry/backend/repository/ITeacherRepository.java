package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nocountry.backend.model.Teacher;

public interface ITeacherRepository extends JpaRepository<Teacher, Long> {

}