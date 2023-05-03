package com.nocountry.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.User;

public interface IUserRepository extends JpaRepository<User, Long> {

<<<<<<< HEAD:backend/src/main/java/com/nocountry/backend/auth/repository/IUserRepository.java
    Optional<User> findByUsername(String username);
=======
    public Optional<User> findByUsername(String username);
>>>>>>> backend-develop:backend/src/main/java/com/nocountry/backend/repository/IUserRepository.java
}