package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.TeacherDto;

public interface ITeacherService {

    public List<TeacherDto> getAllTeachers();

    public TeacherDto getTeacherById(Long teacherId);

    public TeacherDto createTeacher(TeacherDto teacherDto);

    public TeacherDto updateTeacher(Long teacherId, TeacherDto teacherDto);

    public void deleteTeacher(Long teacherId);
}
