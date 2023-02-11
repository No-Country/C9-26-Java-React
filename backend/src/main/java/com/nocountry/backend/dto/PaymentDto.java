package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {

    private Long id;

    private String name;

    private Double amount;

    private Date expiration;

    private boolean state;

    public boolean getState() {
    return state;
    }
}
