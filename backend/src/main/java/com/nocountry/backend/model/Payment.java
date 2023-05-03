package com.nocountry.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
<<<<<<< HEAD
import com.nocountry.backend.utils.enums.PaymentStatus;
import com.nocountry.backend.utils.enums.PaymentType;
=======
import com.nocountry.backend.util.enums.PaymentStatus;
import com.nocountry.backend.util.enums.PaymentType;
>>>>>>> backend-develop

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
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
<<<<<<< HEAD
    @ManyToOne(fetch = FetchType.EAGER)
=======
    @ManyToOne
>>>>>>> backend-develop
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
