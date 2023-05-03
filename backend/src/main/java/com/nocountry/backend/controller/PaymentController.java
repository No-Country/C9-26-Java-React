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

import com.nocountry.backend.dto.PaymentDetailsDto;
import com.nocountry.backend.service.IPaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/payments")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class PaymentController {

    private final IPaymentService paymentService;

    @GetMapping("/all")
    public ResponseEntity<List<PaymentDetailsDto>> getAllPayments() {
        return new ResponseEntity<>(paymentService.getAllPayments(), HttpStatus.OK);
    }

    @GetMapping("/{paymentId}")
    public ResponseEntity<PaymentDetailsDto> getPaymentById(@PathVariable Long paymentId) {
        return new ResponseEntity<>(paymentService.getPaymentById(paymentId), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<PaymentDetailsDto> createPayment(@RequestBody PaymentDetailsDto paymentDetailsDto) {
        return new ResponseEntity<>(paymentService.createPayment(paymentDetailsDto), HttpStatus.CREATED);
    }

    @PatchMapping("/{paymentId}/update")
    public ResponseEntity<PaymentDetailsDto> updatePayment(@PathVariable Long paymentId,
            @RequestBody PaymentDetailsDto paymentDetailsDto) {
        return new ResponseEntity<>(paymentService.updatePayment(paymentId, paymentDetailsDto), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{paymentId}/delete")
    public ResponseEntity<String> deletePayment(@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);
        return new ResponseEntity<>("Payment successfully deleted", HttpStatus.ACCEPTED);
    }
}
