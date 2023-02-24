package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.PaymentDetailsDto;

public interface IPaymentService {

    List<PaymentDetailsDto> getAllPayments();

    PaymentDetailsDto getPaymentById(Long paymentId);

    PaymentDetailsDto createPayment(PaymentDetailsDto paymentDetailsDto);

    PaymentDetailsDto updatePayment(Long paymentId, PaymentDetailsDto paymentDetailsDto);

    void deletePayment(Long paymentId);
}
