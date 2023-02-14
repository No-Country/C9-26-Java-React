package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Payment;

public interface IPaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findAllByStudentId(Long studentId);
}
