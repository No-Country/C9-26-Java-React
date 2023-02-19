package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.PaymentDetailsDto;
import com.nocountry.backend.mapper.PaymentMapper;
import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.service.IPaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements IPaymentService {

    private final IPaymentRepository paymentRepository;

    private final PaymentMapper paymentMapper;

    @Override
    public List<PaymentDetailsDto> getAllPayments() {
        return paymentMapper.convertToDetailsDtoList(paymentRepository.findAll());
    }

    @Override
    public PaymentDetailsDto getPaymentById(Long paymentId) {
        return paymentMapper.convertToDetailsDto(paymentRepository.findById(paymentId).orElseThrow());
    }

    @Override
    public PaymentDetailsDto createPayment(PaymentDetailsDto paymentDetailsDto) {
        var payment = paymentMapper.convertToEntity(paymentDetailsDto);
        return paymentMapper.convertToDetailsDto(paymentRepository.save(payment));
    }

    @Override
    public PaymentDetailsDto updatePayment(Long paymentId, PaymentDetailsDto paymentDetailsDto) {
        return null;
    }

    @Override
    public void deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
