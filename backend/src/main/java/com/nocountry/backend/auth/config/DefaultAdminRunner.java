package com.nocountry.backend.auth.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import com.nocountry.backend.auth.enums.Role;
import com.nocountry.backend.auth.model.User;
import com.nocountry.backend.auth.repository.IUserRepository;
import lombok.RequiredArgsConstructor;

@Component
@Order(value = Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
public class DefaultAdminRunner implements ApplicationRunner {

    private final IUserRepository repository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        var admin = User.builder()
                .email("admin@brightenglish.com")
                .password(passwordEncoder.encode("bright2023"))
                .role(Role.ADMIN)
                .build();

        repository.save(admin);
    }
}
