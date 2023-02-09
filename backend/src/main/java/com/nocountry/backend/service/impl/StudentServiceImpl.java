package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {

    private final IStudentRepository repository;

    private final StudentMapper mapper;

    @Override
    public List<StudentDto> getAll() {
        return null;
    }

    @Override
    public Optional<StudentDto> getById(Long id) {
        return null;
    }

    @Override
    public StudentDto create(StudentDto student) {
        return null;
    }

    @Override
    public StudentDto update(StudentDto student, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
