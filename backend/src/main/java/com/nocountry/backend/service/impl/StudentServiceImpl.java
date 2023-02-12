package com.nocountry.backend.service.impl;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {

    private final IStudentRepository repository;

    @Override
    public Student getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Student> getAll() {
        return repository.findAll();
    }

    @Override
    public Student update(Student student, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
