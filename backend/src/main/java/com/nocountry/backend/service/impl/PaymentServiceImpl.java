package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.mapper.PaymentMapper;
import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.service.IPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements IPaymentService {

    private final IPaymentRepository repository;

    private final PaymentMapper mapper;

    @Override
    public List<PaymentDto> getAll() {
        return null;
    }

    @Override
    public Optional<PaymentDto> getById(Long id) {
        return null;
    }

    @Override
    public PaymentDto create(PaymentDto payment) {
        return null;
    }

    @Override
    public PaymentDto update(PaymentDto payment, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
