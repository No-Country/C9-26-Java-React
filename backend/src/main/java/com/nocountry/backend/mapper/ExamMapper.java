package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.ExamDetailsDto;
import com.nocountry.backend.dto.ExamListDto;
import com.nocountry.backend.model.Exam;
import com.nocountry.backend.util.MapperUtil;

@Component
public class ExamMapper {

    public ExamDetailsDto convertToDetailsDto(Exam exam) {
        return MapperUtil.map(exam, ExamDetailsDto.class);
    }

    public Exam convertToEntity(ExamDetailsDto examDetailsDto) {
        return MapperUtil.map(examDetailsDto, Exam.class);
    }

    public List<ExamDetailsDto> convertToDetailsDtoList(List<Exam> examList) {
        return MapperUtil.mapList(examList, ExamDetailsDto.class);
    }

    public List<ExamListDto> convertToDtoList(List<Exam> examList) {
        return MapperUtil.mapList(examList, ExamListDto.class);
    }

    public List<Exam> convertToEntityList(List<ExamListDto> examListDto) {
        return MapperUtil.mapList(examListDto, Exam.class);
    }
}
