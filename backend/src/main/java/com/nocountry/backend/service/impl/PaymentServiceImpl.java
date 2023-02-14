package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.mapper.PaymentMapper;
import com.nocountry.backend.model.Payment;
import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.service.IPaymentService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements IPaymentService {

    private final IPaymentRepository repository;

    private final PaymentMapper mapper;

    private Payment findPaymentById(Long paymentId) {
        return repository.findById(paymentId)
                .orElseThrow(() -> new EntityNotFoundException("Payment not found"));
    }

    @Override
    public Optional<PaymentDto> getPayment(Long paymentId) {
        return Optional.ofNullable(mapper.convertToDto(this.findPaymentById(paymentId)));
    }

    @Override
    public List<PaymentDto> getAllPayments() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public PaymentDto createPayment(PaymentDto paymentDto) {
        return mapper.convertToDto(repository.save(mapper.convertToEntity(paymentDto)));
    }

    @Override
    public PaymentDto updatePayment(PaymentDto paymentDto, Long paymentId) {
        Payment updatedPayment = this.findPaymentById(paymentId);
        updatedPayment.setType(paymentDto.getType());
        updatedPayment.setStatus(paymentDto.getStatus());
        return mapper.convertToDto(repository.save(updatedPayment));
    }

    @Override
    public void deletePayment(Long paymentId) {
        repository.deleteById(paymentId);
    }

    @Override
    public List<PaymentDto> getPaymentsByStudentId(Long studentId) {
        return mapper.convertToDtoList(repository.findAllByStudentId(studentId));
    }
}
