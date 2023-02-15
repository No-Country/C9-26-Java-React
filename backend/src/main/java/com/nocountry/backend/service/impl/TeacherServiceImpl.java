package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.mapper.TeacherMapper;
import com.nocountry.backend.model.Teacher;
import com.nocountry.backend.repository.ITeacherRepository;
import com.nocountry.backend.service.ITeacherService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements ITeacherService {

    private final ITeacherRepository repository;

    private final TeacherMapper mapper;

    private Teacher findTeacherById(Long teacherId) {
        return repository.findById(teacherId)
                .orElseThrow(() -> new EntityNotFoundException("Teacher not found"));
    }

    @Override
    public TeacherDto getTeacher(Long teacherId) {
        return mapper.convertToDto(this.findTeacherById(teacherId));
    }

    @Override
    public List<TeacherDto> getAllTeachers() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {
        return mapper.convertToDto(repository.save(mapper.convertToEntity(teacherDto)));
    }

    @Override
    public TeacherDto updateTeacher(TeacherDto teacherDto, Long teacherId) {
        Teacher updatedTeacher = this.findTeacherById(teacherId);
        updatedTeacher.setFirstName(teacherDto.getFirstName());
        updatedTeacher.setLastName(teacherDto.getLastName());
        return mapper.convertToDto(repository.save(updatedTeacher));
    }

    @Override
    public void deleteTeacher(Long teacherId) {
        repository.deleteById(teacherId);
    }
}
