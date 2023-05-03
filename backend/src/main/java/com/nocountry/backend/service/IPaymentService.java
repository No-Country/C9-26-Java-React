package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.PaymentDetailsDto;

public interface IPaymentService {

<<<<<<< HEAD
    List<PaymentDetailsDto> getAllPayments();

    PaymentDetailsDto getPaymentById(Long paymentId);

    PaymentDetailsDto createPayment(PaymentDetailsDto paymentDetailsDto);

    PaymentDetailsDto updatePayment(Long paymentId, PaymentDetailsDto paymentDetailsDto);
=======
    public List<PaymentDetailsDto> getAllPayments();

    public PaymentDetailsDto getPaymentById(Long paymentId);

    public PaymentDetailsDto createPayment(PaymentDetailsDto paymentDetailsDto);

    public PaymentDetailsDto updatePayment(Long paymentId, PaymentDetailsDto paymentDetailsDto);
>>>>>>> backend-develop

    public void deletePayment(Long paymentId);
}
