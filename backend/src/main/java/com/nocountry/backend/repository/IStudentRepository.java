package com.nocountry.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Student;

public interface IStudentRepository extends JpaRepository<Student, Long> {

<<<<<<< HEAD
    Optional<Student> findByEmail(String email);
=======
    public Optional<Student> findByEmail(String email);
>>>>>>> backend-develop
}
