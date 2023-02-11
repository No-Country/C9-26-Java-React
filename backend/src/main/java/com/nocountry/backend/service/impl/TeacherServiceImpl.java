package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.mapper.TeacherMapper;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.model.Teacher;
import com.nocountry.backend.repository.ITeacherRepository;
import com.nocountry.backend.service.ITeacherService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements ITeacherService {

    private final ITeacherRepository repository;

    private final TeacherMapper mapper;

    @Override
    public List<TeacherDto> getAll() {return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public Optional<TeacherDto> getById(Long id) {
        return Optional.ofNullable(mapper.convertToDto(repository.getReferenceById(id)));
    }

    @Override
    public TeacherDto create(TeacherDto teacher) {
        return mapper.convertToDto(repository.save(mapper.convertDtoToEntity(teacher)));

    }

    @Override
    public TeacherDto update(TeacherDto teacher, Long id) {
        Teacher updatedTeacher= repository.findById(id).orElseThrow(EntityNotFoundException::new);
        updatedTeacher.setFirstName(teacher.getFirstName());
        updatedTeacher.setLastName(teacher.getLastName());
        return  mapper.convertToDto(repository.save(updatedTeacher));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
