package com.nocountry.backend.dto;

import com.nocountry.backend.utils.enums.PaymentStatus;
import com.nocountry.backend.utils.enums.PaymentType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentListDto {

    private Long id;

    private PaymentType paymentType;

    private PaymentStatus paymentStatus;
}
