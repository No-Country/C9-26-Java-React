package com.nocountry.backend.dto;

<<<<<<< HEAD
=======
import com.nocountry.backend.util.enums.Rating;

>>>>>>> backend-develop
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExamDetailsDto {

    private Long id;

    private String name;

    private String examDate;

<<<<<<< HEAD
    private String grammar;

    private String speaking;

    private String writing;

    private String listening;

    private Boolean status;
=======
    private Rating grammar;

    private Rating speaking;

    private Rating writing;

    private Rating listening;
>>>>>>> backend-develop

    private Long studentId;

    private String studentFirstName;

    private String studentLastName;
}
