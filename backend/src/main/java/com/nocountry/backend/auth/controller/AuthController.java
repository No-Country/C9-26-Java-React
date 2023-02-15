package com.nocountry.backend.auth.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.dto.RegisterRequestDto;
import com.nocountry.backend.auth.model.User;
import com.nocountry.backend.auth.repository.IUserRepository;
import com.nocountry.backend.auth.service.IAuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final IAuthenticationService service;
    private final IUserRepository repository;

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDto> register(
            @RequestBody RegisterRequestDto request) {
        return new ResponseEntity<>(service.register(request), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(
            @RequestBody AuthRequestDto request) {
        return new ResponseEntity<>(service.login(request), HttpStatus.ACCEPTED);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return repository.findAll();
    }
}
