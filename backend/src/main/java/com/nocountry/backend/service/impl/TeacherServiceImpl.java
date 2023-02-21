package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.mapper.TeacherMapper;
import com.nocountry.backend.model.Teacher;
import com.nocountry.backend.repository.ITeacherRepository;
import com.nocountry.backend.service.ITeacherService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements ITeacherService {

    private final ITeacherRepository teacherRepository;

    private final TeacherMapper teacherMapper;

    @Override
    public List<TeacherDto> getAllTeachers() {
        return teacherMapper.convertToDtoList(teacherRepository.findAll());
    }

    @Override
    public TeacherDto getTeacherById(Long teacherId) {
        return teacherMapper.convertToDto(teacherRepository.findById(teacherId).orElseThrow());
    }

    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {
        var teacher = teacherMapper.convertToEntity(teacherDto);
        return teacherMapper.convertToDto(teacherRepository.save(teacher));
    }

    @Override
    public TeacherDto updateTeacher(Long teacherId, TeacherDto teacherDto) {
        Teacher teacher = teacherRepository.findById(teacherId).orElse(null);

        if (teacher != null) {
            if (teacherDto.getFirstName() != null) {
                teacher.setFirstName(teacherDto.getFirstName());
            }

            if (teacherDto.getLastName() != null) {
                teacher.setLastName(teacherDto.getLastName());
            }
        }

        return teacherMapper.convertToDto(teacherRepository.save(teacher));
    }

    @Override
    public void deleteTeacher(Long teacherId) {
        teacherRepository.deleteById(teacherId);
    }
}
