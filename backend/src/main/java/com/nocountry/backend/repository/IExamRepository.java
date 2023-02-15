package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Exam;

public interface IExamRepository extends JpaRepository<Exam, Long> {

    public List<Exam> findAllByStudentId(Long studentId);
}
