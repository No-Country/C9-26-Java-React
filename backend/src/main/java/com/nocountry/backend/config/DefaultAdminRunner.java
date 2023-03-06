package com.nocountry.backend.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.util.enums.Role;

import lombok.RequiredArgsConstructor;

@Component
@Order(value = Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
public class DefaultAdminRunner implements ApplicationRunner {

    private final IUserRepository userRepository;

    private final IStudentRepository studentRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        var admin = User.builder()
                .username("admin@brightenglish.com")
                .password(passwordEncoder.encode("12345"))
                .role(Role.ADMIN.name())
                .build();

        var student = Student.builder()
                .email(admin.getUsername())
                .build();

        admin.setStudent(student);
        student.setUser(admin);

        if (!userRepository.findByUsername(admin.getUsername()).isPresent()) {
            userRepository.save(admin);
            studentRepository.save(student);
        }
    }
}
