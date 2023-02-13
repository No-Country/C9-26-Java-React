package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.repository.ITeacherRepository;
import com.nocountry.backend.service.ITeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements ITeacherService {

    private final ITeacherRepository repository;

    @Override
    public List<TeacherDto> getAll() {
        return null;
    }

    @Override
    public Optional<TeacherDto> getById(Long id) {
        return null;
    }

    @Override
    public TeacherDto create(TeacherDto teacher) {
        return null;
    }

    @Override
    public TeacherDto update(TeacherDto teacher, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
