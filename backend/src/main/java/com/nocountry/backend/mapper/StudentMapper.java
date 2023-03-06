package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.StudentDetailsDto;
import com.nocountry.backend.dto.StudentListDto;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.util.MapperUtil;

@Component
public class StudentMapper {

    public StudentDetailsDto convertToDto(Student student) {
        return MapperUtil.map(student, StudentDetailsDto.class);
    }

    public Student convertToEntity(StudentDetailsDto studentDetailsDto) {
        return MapperUtil.map(studentDetailsDto, Student.class);
    }

    public List<StudentListDto> convertToDtoList(List<Student> studentList) {
        return MapperUtil.mapList(studentList, StudentListDto.class);
    }

    public List<Student> convertToEntityList(List<StudentListDto> studentListDto) {
        return MapperUtil.mapList(studentListDto, Student.class);
    }
}
