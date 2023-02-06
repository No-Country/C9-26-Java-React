package com.nocountry.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@Table(name = "USER")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @Enumerated(EnumType.STRING)
    @Column(name = "Role")
    private Role role;


    @ManyToOne
    @JoinColumn(name = "curso_id" , insertable = false, updatable = false)
    private Curso curso;

    public Usuario() {
    }

    public Usuario(Integer id) {
        this.id = id;
    }


}