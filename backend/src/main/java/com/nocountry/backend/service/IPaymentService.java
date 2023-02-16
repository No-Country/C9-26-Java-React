package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.PaymentDto;

public interface IPaymentService {

    PaymentDto getPayment(Long paymentId);

    List<PaymentDto> getAllPayments();

    PaymentDto createPayment(PaymentDto paymentDto);

    PaymentDto updatePayment(PaymentDto paymentDto, Long paymentId);

    void deletePayment(Long paymentId);
}
