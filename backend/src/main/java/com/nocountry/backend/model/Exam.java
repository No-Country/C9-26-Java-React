package com.nocountry.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
<<<<<<< HEAD

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
=======
import com.nocountry.backend.util.enums.Rating;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
>>>>>>> backend-develop
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
@Table(name = "exams")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String examDate;

    @Enumerated(EnumType.STRING)
    private Rating grammar;

    @Enumerated(EnumType.STRING)
    private Rating speaking;

    @Enumerated(EnumType.STRING)
    private Rating writing;

    @Enumerated(EnumType.STRING)
    private Rating listening;

<<<<<<< HEAD
    private Boolean status;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
=======
    @JsonBackReference
    @ManyToOne
>>>>>>> backend-develop
    @JoinColumn(name = "student_id")
    private Student student;

    public void setStudent(Student student) {
        if (this.student == student) {
            return;
        }
        this.student = student;
        student.getExams().add(this);
    }
}
