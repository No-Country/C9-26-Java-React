package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Exam;

public interface IExamRepository extends JpaRepository<Exam, Long> {

}