package com.nocountry.backend.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.AuthenticationRequestDto;
import com.nocountry.backend.dto.AuthenticationResponseDto;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.UserRepository;
import com.nocountry.backend.service.AuthenticationService;
import com.nocountry.backend.utils.enums.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

        private final UserRepository repository;

        private final PasswordEncoder passwordEncoder;

        private final JwtProvider jwtProvider;

        private final AuthenticationManager authenticationManager;

        @Override
        public AuthenticationResponseDto register(AuthenticationRequestDto request) {
                var user = User.builder()
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER)
                                .build();

                repository.save(user);

                var jwt = jwtProvider.generateToken(user);

                return AuthenticationResponseDto.builder()
                                .token(jwt)
                                .build();
        }

        @Override
        public AuthenticationResponseDto authenticate(AuthenticationRequestDto request) {
                authenticationManager
                                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                                request.getPassword()));

                var user = repository.findByEmail(request.getEmail()).orElseThrow();
                var jwt = jwtProvider.generateToken(user);

                return AuthenticationResponseDto.builder()
                                .token(jwt)
                                .build();
        }
}
