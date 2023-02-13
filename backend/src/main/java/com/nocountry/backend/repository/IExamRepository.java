package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nocountry.backend.model.Exam;

import java.util.List;

public interface IExamRepository extends JpaRepository<Exam, Long> {

 /*   List<Exam> getExamsByStudent_id(Long studentId);*/
}