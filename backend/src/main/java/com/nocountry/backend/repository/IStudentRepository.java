package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nocountry.backend.model.Student;

public interface IStudentRepository extends JpaRepository<Student, Long> {

}
