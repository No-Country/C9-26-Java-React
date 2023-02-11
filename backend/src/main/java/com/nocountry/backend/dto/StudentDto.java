package com.nocountry.backend.dto;

import com.nocountry.backend.enums.Level;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String imageUrl;

    private Long dni;

    private String address;

    private String phone;

    private String birthdate;

    private Level level;
}
