package com.nocountry.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@Table(name = "USER")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    private String nombre;

    private String apellido;

    private LocalDate nacimiento;

    private Long dni;

    private String direccion;

    private Long telefono;

    private String email;

    private int curso_id;

    @ManyToOne
    @JoinColumn(name = "curso_id" , insertable = false, updatable = false)
    private Curso curso;

    public Student() {
    }

    public Student(Integer id) {
        this.id = id;
    }


}