package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.model.Exam;
import com.nocountry.backend.utils.MapperUtil;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ExamMapper {

    public ExamDto convertEntityToDto(Exam exam) {
        return MapperUtil.map(exam, ExamDto.class);
    }

    public Exam convertDtoToEntity(ExamDto examDTO) {
        return MapperUtil.map(examDTO, Exam.class);
    }

    public List<ExamDto> convertToDtoList(List<Exam> examList) {
        return MapperUtil.mapList(examList, ExamDto.class);
    }

    public List<Exam> convertToEntityList(List<ExamDto> examDto) {
        return MapperUtil.mapList(examDto, Exam.class);
    }
}
