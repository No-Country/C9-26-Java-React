package com.nocountry.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @Column(name = "exam_date")
    private String examDate;

    @Column(name = "exam_fee")
    private Double examFee;

    private Integer grammarNote;

    private Integer speakingNote;

    private Integer writingNote;

    private Integer listeningNote;

    private Boolean status;

    // hacer las relaciones
    private Course course;
    private Student student;
}
