package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {

    private Long id;

    private String date;

    private String schedule;

<<<<<<< HEAD
    private String email;

    private String fullName;

    private Boolean status;
=======
    private String description;

    private String email;

    private String fullName;
>>>>>>> backend-develop
}
