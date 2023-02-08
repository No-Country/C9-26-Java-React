package com.nocountry.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@Table(name = "COURSE")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String nombre;

    private String profesor;

    private String dia;

    @Column(nullable = true)
    private int horario;

    private String modalidad;

    @Column(nullable = true)
    private int nivel;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER,mappedBy = "curso")
    private List<Student> usuario;


    public Curso() {
    }

    public Curso(Integer id) {
        this.id = id;
    }


}