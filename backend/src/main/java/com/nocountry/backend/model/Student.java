package com.nocountry.backend.model;

import com.nocountry.backend.auth.model.User;
import com.nocountry.backend.utils.enums.Level;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
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

    private String imageUrl;

    private Long dni;

    private String address;

    private String email;

    private String phone;

    private String birthdate;

    @Enumerated(EnumType.STRING)
    private Level level;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private User user;

    // @ManyToOne
    // @JoinColumn(name = "course_id")
    // private Course course;

    @OneToOne(cascade = CascadeType.ALL)
    private Course course;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Exam> exams;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Payment> payments;
}