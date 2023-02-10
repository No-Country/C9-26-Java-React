package com.nocountry.backend.auth.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.nocountry.backend.auth.config.jwt.JwtProvider;
import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.dto.RegisterRequestDto;
import com.nocountry.backend.auth.model.User;
import com.nocountry.backend.auth.repository.IUserRepository;
import com.nocountry.backend.auth.service.IAuthenticationService;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.auth.enums.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements IAuthenticationService {

        private final IUserRepository userRepository;

        private final IStudentRepository studentRepository;

        private final PasswordEncoder passwordEncoder;

        private final JwtProvider jwtProvider;

        private final AuthenticationManager authenticationManager;

        @Override
        public AuthResponseDto register(RegisterRequestDto request) {
                var user = User.builder()
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER)
                                .build();

                userRepository.save(user);

                var student = Student.builder()
                                .firstName(request.getFirstName())
                                .lastName(request.getLastName())
                                .dni(request.getDni())
                                .address(request.getAddress())
                                .phone(request.getPhone())
                                .birthdate(request.getBirthdate())
                                .level(request.getLevel())
                                .build();

                studentRepository.save(student);

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

                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                var jwt = jwtProvider.generateToken(user);

                return AuthResponseDto.builder()
                                .token(jwt)
                                .build();
        }
}
