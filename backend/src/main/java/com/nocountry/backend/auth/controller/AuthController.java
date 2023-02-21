package com.nocountry.backend.auth.controller;

import com.nocountry.backend.auth.service.IAuthService;
import com.nocountry.backend.service.IEmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.dto.RegisterRequestDto;

import lombok.RequiredArgsConstructor;

import java.io.IOException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final IAuthService service;
    private final IEmailService emailService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDto> register(
            @RequestBody RegisterRequestDto request) throws IOException {
        ResponseEntity<AuthResponseDto> response= new ResponseEntity<>(service.register(request),HttpStatus.CREATED);
        if (response.getStatusCode() == HttpStatus.CREATED) {
            emailService.confirmationMessage(request.getUsername(),request.getPassword());
        }
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(
            @RequestBody AuthRequestDto request) {
        return new ResponseEntity<>(service.login(request), HttpStatus.ACCEPTED);
    }
}
