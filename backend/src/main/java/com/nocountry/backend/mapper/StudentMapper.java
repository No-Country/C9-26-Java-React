package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.utils.MapperUtil;

@Component
public class StudentMapper {

    public StudentDto convertEntityToDto(Student student) {
        return MapperUtil.map(student, StudentDto.class);
    }

    public Student convertDtoToEntity(StudentDto studentDTO) {
        return MapperUtil.map(studentDTO, Student.class);
    }

    public List<StudentDto> convertToDtoList(List<Student> studentList) {
        return MapperUtil.mapList(studentList, StudentDto.class);
    }

    public List<Student> convertToEntityList(List<StudentDto> studentDto) {
        return MapperUtil.mapList(studentDto, Student.class);
    }
}
