package com.nocountry.backend.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.nocountry.backend.auth.config.jwt.JwtAuthFilter;
import com.nocountry.backend.auth.utils.enums.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter JwtAuthenticationFilter;

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors()
                .and()
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/api/appointments/**").permitAll()
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/courses/**").hasRole(Role.ADMIN.name())
                .requestMatchers("/api/exams/**").hasRole(Role.ADMIN.name())
                .requestMatchers("/api/payments/**").hasRole(Role.ADMIN.name())
                .requestMatchers("/api/students/admin/**").hasRole(Role.ADMIN.name())
                .requestMatchers("/api/students/token/**").hasRole(Role.STUDENT.name())
                .requestMatchers("/api/teachers/**").hasRole(Role.ADMIN.name())
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(JwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
