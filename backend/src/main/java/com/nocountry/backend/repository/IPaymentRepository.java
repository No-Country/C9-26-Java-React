package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Payment;

public interface IPaymentRepository extends JpaRepository<Payment, Long> {

}
