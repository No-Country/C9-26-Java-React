package com.nocountry.backend.auth.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.nocountry.backend.auth.config.jwt.JwtProvider;
import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.model.User;
import com.nocountry.backend.auth.repository.IUserRepository;
import com.nocountry.backend.auth.service.IAuthenticationService;
import com.nocountry.backend.auth.enums.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements IAuthenticationService {

        private final IUserRepository repository;

        private final PasswordEncoder passwordEncoder;

        private final JwtProvider jwtProvider;

        private final AuthenticationManager authenticationManager;

        @Override
        public AuthResponseDto register(AuthRequestDto request) {
                var user = User.builder()
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER)
                                .build();

                repository.save(user);

                var jwt = jwtProvider.generateToken(user);

                return AuthResponseDto.builder()
                                .token(jwt)
                                .build();
        }

        @Override
        public AuthResponseDto authenticate(AuthRequestDto request) {
                authenticationManager
                                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                                request.getPassword()));

                var user = repository.findByEmail(request.getEmail()).orElseThrow();
                var jwt = jwtProvider.generateToken(user);

                return AuthResponseDto.builder()
                                .token(jwt)
                                .build();
        }
}
