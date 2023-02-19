package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.PaymentDto;

public interface IPaymentService {

    List<PaymentDto> getAllPayments();

    PaymentDto getPaymentById(Long paymentId);

    PaymentDto createPayment(PaymentDto paymentDto);

    PaymentDto updatePayment(Long paymentId, PaymentDto paymentDto);

    void deletePayment(Long paymentId);
}
