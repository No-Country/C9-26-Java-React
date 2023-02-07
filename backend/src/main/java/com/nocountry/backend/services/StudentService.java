package com.nocountry.backend.services;

import com.nocountry.backend.entities.Student;
import com.nocountry.backend.repositories.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student>getAll(){
        return studentRepository.findAll();
    }

    public void delete(int id){
        studentRepository.deleteById(id);
    }

    public Optional<Student> getForId(int id){
        return studentRepository.findById(id);
    }

    public Student create(Student nuevo){
        return studentRepository.save(nuevo);
    }

    public Student update(Student newStudent, Integer id) {
        return
                studentRepository.findById(id)
                        .map(Student -> {
                                    Student.setNombre(newStudent.getNombre());
                                    Student.setApellido(newStudent.getApellido());
                                    Student.setTelefono(newStudent.getTelefono());
                                    Student.setDireccion(newStudent.getDireccion());
                                    Student.setDni(newStudent.getDni());
                                    Student.setNacimiento(newStudent.getNacimiento());
                                    Student.setEmail(newStudent.getEmail());
                                    return studentRepository.save(newStudent);
                                }
                        ).get();
    }

}
