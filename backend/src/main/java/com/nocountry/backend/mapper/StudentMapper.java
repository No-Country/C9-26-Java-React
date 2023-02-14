package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.utils.MapperUtil;

@Component
public class StudentMapper {

    public StudentDto convertToDto(Student student) {
        return MapperUtil.map(student, StudentDto.class);
    }

    public Student convertToEntity(StudentDto studentDto) {
        return MapperUtil.map(studentDto, Student.class);
    }

    public List<StudentDto> convertToDtoList(List<Student> studentList) {
        return MapperUtil.mapList(studentList, StudentDto.class);
    }

    public List<Student> convertToEntityList(List<StudentDto> studentDtoList) {
        return MapperUtil.mapList(studentDtoList, Student.class);
    }
}
