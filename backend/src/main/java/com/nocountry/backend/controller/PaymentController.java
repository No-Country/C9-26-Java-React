package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.service.IPaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final IPaymentService paymentService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<PaymentDto>> getAllPayments() {
        return new ResponseEntity<>(paymentService.getAllPayments(), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{paymentId}")
    public ResponseEntity<PaymentDto> getPaymentById(@PathVariable Long paymentId) {
        return new ResponseEntity<>(paymentService.getPaymentById(paymentId), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PaymentDto> createPayment(@RequestBody PaymentDto paymentDto) {
        return new ResponseEntity<>(paymentService.createPayment(paymentDto), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/{paymentId}/update")
    public ResponseEntity<PaymentDto> updatePayment(@PathVariable Long paymentId,
            @RequestBody PaymentDto paymentDto) {
        return new ResponseEntity<>(paymentService.updatePayment(paymentId, paymentDto), HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{paymentId}/delete")
    public ResponseEntity<String> deletePayment(@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);
        return new ResponseEntity<>("Payment successfully deleted", HttpStatus.ACCEPTED);
    }
}