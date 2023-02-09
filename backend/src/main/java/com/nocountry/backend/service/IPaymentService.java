package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.PaymentDto;

public interface IPaymentService {

    public List<PaymentDto> getAll();

    public Optional<PaymentDto> getById(Long id);

    public PaymentDto create(PaymentDto payment);

    public PaymentDto update(PaymentDto payment, Long id);

    public void delete(Long id);
}
