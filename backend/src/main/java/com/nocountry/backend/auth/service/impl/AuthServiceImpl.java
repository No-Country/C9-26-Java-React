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
import com.nocountry.backend.auth.service.IAuthService;
import com.nocountry.backend.auth.utils.enums.Role;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IMailSenderService;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

        private final IUserRepository userRepository;

        private final IStudentRepository studentRepository;

        private final PasswordEncoder passwordEncoder;

        private final JwtProvider jwtProvider;

        private final AuthenticationManager authenticationManager;

        private final IMailSenderService mailSender;

        @Override
        public AuthResponseDto register(RegisterRequestDto request) {
                var user = User.builder()
                                .username(request.getUsername())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER.name())
                                .build();

                var student = Student.builder()
                                .firstName(request.getFirstName())
                                .lastName(request.getLastName())
                                .dni(request.getDni())
                                .address(request.getAddress())
                                .email(request.getUsername())
                                .phone(request.getPhone())
                                .birthdate(request.getBirthdate())
                                .level(request.getLevel())
                                .build();

                user.setStudent(student);
                student.setUser(user);

                userRepository.save(user);
                studentRepository.save(student);

                var jwt = jwtProvider.generateToken(user);

                String to = request.getUsername();
                String subject = "Acceso al Campus Virtual";
                String body = "<html><body>"
                                + "<p>Estimado/a estudiante,</p>"
                                + "<p>Le informamos que ya cuenta con acceso al Campus Virtual.</p>"
                                + "<p>A continuación, encontrará los detalles de inicio de sesión:</p>"
                                + "<ul>"
                                + "<li>Nombre de usuario: " + request.getUsername() + "</li>"
                                + "<li>Contraseña: " + request.getPassword() + "</li>"
                                + "</ul>"
                                + "<p>Para acceder a su cuenta, por favor visite nuestro sitio web en <a href=\"https://bright-english.vercel.app/\">bright-english.vercel.app</a>.</p>"
                                + "<p>Atentamente,<br>Bright English</p>"
                                + "</body></html>";

                try {
                        mailSender.sendEmail(to, subject, body);
                } catch (MessagingException e) {
                        e.printStackTrace();
                }

                return AuthResponseDto.builder()
                                .role(user.getRole())
                                .token(jwt)
                                .build();
        }

        @Override
        public AuthResponseDto login(AuthRequestDto request) {
                authenticationManager
                                .authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),
                                                request.getPassword()));

                var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
                var jwt = jwtProvider.generateToken(user);

                return AuthResponseDto.builder()
                                .role(user.getRole())
                                .token(jwt)
                                .build();
        }
}
