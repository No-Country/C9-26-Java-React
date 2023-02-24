package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.TeacherDto;

public interface ITeacherService {

    List<TeacherDto> getAllTeachers();

    TeacherDto getTeacherById(Long teacherId);

    TeacherDto createTeacher(TeacherDto teacherDto);

    TeacherDto updateTeacher(Long teacherId, TeacherDto teacherDto);

    void deleteTeacher(Long teacherId);
}
