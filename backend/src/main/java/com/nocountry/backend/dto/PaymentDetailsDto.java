package com.nocountry.backend.dto;

<<<<<<< HEAD
import com.nocountry.backend.utils.enums.PaymentStatus;
import com.nocountry.backend.utils.enums.PaymentType;
=======
import com.nocountry.backend.util.enums.PaymentStatus;
import com.nocountry.backend.util.enums.PaymentType;
>>>>>>> backend-develop

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDetailsDto {

    private Long id;

    private PaymentType paymentType;

    private PaymentStatus paymentStatus;

    private Long studentId;

    private String studentFirstName;

    private String studentLastName;
}
