package com.nocountry.backend.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.dto.RegisterRequestDto;
import com.nocountry.backend.auth.service.IAuthenticationService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final IAuthenticationService service;

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
}
