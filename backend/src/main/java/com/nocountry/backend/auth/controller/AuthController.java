package com.nocountry.backend.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.service.IAuthenticationService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final IAuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDto> register(
            @RequestBody AuthRequestDto request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(
            @RequestBody AuthRequestDto request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
