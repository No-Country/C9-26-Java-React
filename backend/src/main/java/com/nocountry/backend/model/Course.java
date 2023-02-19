package com.nocountry.backend.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.nocountry.backend.utils.enums.Level;

import jakarta.persistence.CascadeType;
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
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;

    @Enumerated(EnumType.STRING)
    private Level level;

    private String mode;

    private String courseDays;

    private String schedule;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @JsonManagedReference
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Student> students = new ArrayList<>();

    public void setTeacher(Teacher teacher) {
        if (this.teacher == teacher) {
            return;
        }
        this.teacher = teacher;
        teacher.getCourses().add(this);
    }

    public void addStudent(Student student) {
        if (!this.students.contains(student)) {
            this.students.add(student);
            student.setCourse(this);
        }
    }
}
