package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.PaymentDto;
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
    public List<PaymentDto> getAllPayments() {
        return paymentMapper.convertToDtoList(paymentRepository.findAll());
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        return paymentMapper.convertToDto(paymentRepository.findById(paymentId).orElseThrow());
    }

    @Override
    public PaymentDto createPayment(PaymentDto paymentDto) {
        var payment = paymentMapper.convertToEntity(paymentDto);
        return paymentMapper.convertToDto(paymentRepository.save(payment));
    }

    @Override
    public PaymentDto updatePayment(Long paymentId, PaymentDto paymentDto) {
        return null;
    }

    @Override
    public void deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
