package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.PaymentDto;

public interface IPaymentService {

    Optional<PaymentDto> getPayment(Long paymentId);

    List<PaymentDto> getAllPayments();

    PaymentDto createPayment(PaymentDto paymentDto);

    PaymentDto updatePayment(PaymentDto paymentDto, Long paymentId);

    void deletePayment(Long paymentId);

    List<PaymentDto> getPaymentsByStudentId(Long studentId);
}
