package com.nocountry.backend.auth.dto;

import com.nocountry.backend.utils.enums.Level;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDto {

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private Long dni;

    private String address;

    private String phone;

    private String birthdate;

    private Level level;
}