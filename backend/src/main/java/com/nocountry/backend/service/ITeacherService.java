package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.TeacherDto;

public interface ITeacherService {

    Optional<TeacherDto> getTeacher(Long teacherId);

    List<TeacherDto> getAllTeachers();

    TeacherDto createTeacher(TeacherDto teacherDto);

    TeacherDto updateTeacher(TeacherDto teacherDto, Long teacherId);

    void deleteTeacher(Long teacherId);
}
