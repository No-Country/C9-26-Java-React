package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Quiz;

public interface IQuizRepository extends JpaRepository<Quiz, Long> {

}