package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    private final IPaymentService service;

    @GetMapping("/{paymentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PaymentDto> getPayment(@PathVariable Long paymentId) {
        PaymentDto paymentDto = service.getPayment(paymentId);
        if (paymentDto != null) {
            return new ResponseEntity<>(paymentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<PaymentDto>> getAllPayments() {
        return new ResponseEntity<>(service.getAllPayments(), HttpStatus.OK);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PaymentDto> createPayment(@RequestBody PaymentDto paymentDto) {
        return new ResponseEntity<>(service.createPayment(paymentDto), HttpStatus.CREATED);
    }

    @PutMapping("/update/{paymentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PaymentDto> updatePayment(@RequestBody PaymentDto paymentDto, @PathVariable Long paymentId) {
        return new ResponseEntity<>(service.updatePayment(paymentDto, paymentId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{paymentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deletePayment(@PathVariable Long paymentId) {
        if (service.getPayment(paymentId) != null) {
            service.deletePayment(paymentId);
            return new ResponseEntity<>("Payment successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
