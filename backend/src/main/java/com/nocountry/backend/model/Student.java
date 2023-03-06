package com.nocountry.backend.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.nocountry.backend.util.enums.Level;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    @OneToOne
    @JoinColumn(name = "image_resource_id")
    private MediaResource imageResource;

    private Long dni;

    private String address;

    private String email;

    private String phone;

    private String birthdate;

    @Enumerated(EnumType.STRING)
    private Level level;

    @ElementCollection
    @CollectionTable(name = "quizzes")
    @Default
    private Map<String, String> quizzesStatus = new HashMap<>();

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @JsonManagedReference
    @Default
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Exam> exams = new ArrayList<>();

    @JsonManagedReference
    @Default
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Payment> payments = new ArrayList<>();

    public void setCourse(Course course) {
        if (this.course == course) {
            return;
        }
        this.course = course;
    }

    public void addExam(Exam exam) {
        if (!this.exams.contains(exam)) {
            this.exams.add(exam);
            exam.setStudent(this);
        }
    }

    public void addPayment(Payment payment) {
        if (!this.payments.contains(payment)) {
            this.payments.add(payment);
            payment.setStudent(this);
        }
    }
}