package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.mapper.PaymentMapper;
import com.nocountry.backend.model.Payment;
import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.service.IPaymentService;
import jakarta.persistence.EntityNotFoundException;
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
    public Optional<PaymentDto> getById(Long id) {
        return Optional.ofNullable(mapper.convertToDto(repository.getReferenceById(id)));

    }

    @Override
    public List<PaymentDto> getAll() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public PaymentDto create(PaymentDto payment) {
        return mapper.convertToDto(repository.save(mapper.convertDtoToEntity(payment)));
    }

    @Override
    public PaymentDto update(PaymentDto payment, Long id) {
        Payment updatedPayment = repository.findById(id).orElseThrow(EntityNotFoundException::new);
        updatedPayment.setName(payment.getName());
        updatedPayment.setAmount(payment.getAmount());
        updatedPayment.setExpiration(payment.getExpiration());
        updatedPayment.setState(payment.getState());
        return mapper.convertToDto(repository.save(updatedPayment));

    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
