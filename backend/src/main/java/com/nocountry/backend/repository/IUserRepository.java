package com.nocountry.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.User;

public interface IUserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByUsername(String username);
}