package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.model.Teacher;
import com.nocountry.backend.utils.MapperUtil;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TeacherMapper {

    public TeacherDto convertToDto(Teacher teacher) {
        return MapperUtil.map(teacher, TeacherDto.class);
    }

    public Teacher convertDtoToEntity(TeacherDto teacherDTO) {
        return MapperUtil.map(teacherDTO, Teacher.class);
    }

    public List<TeacherDto> convertToDtoList(List<Teacher> teacherList) {
        return MapperUtil.mapList(teacherList, TeacherDto.class);
    }

    public List<Teacher> convertToEntityList(List<TeacherDto> teacherDto) {
        return MapperUtil.mapList(teacherDto, Teacher.class);
    }
}
