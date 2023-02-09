package com.nocountry.backend.auth.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nocountry.backend.auth.model.User;

public interface IUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}