package com.nocountry.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.nocountry.backend.util.enums.PaymentStatus;
import com.nocountry.backend.util.enums.PaymentType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    public void setStudent(Student student) {
        if (this.student == student) {
            return;
        }
        this.student = student;
        student.getPayments().add(this);
    }
}
