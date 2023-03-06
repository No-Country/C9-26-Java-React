package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.model.Appointment;
import com.nocountry.backend.util.MapperUtil;

@Component
public class AppointmentMapper {

    public AppointmentDto convertToDto(Appointment appointment) {
        return MapperUtil.map(appointment, AppointmentDto.class);
    }

    public Appointment convertToEntity(AppointmentDto appointmentDto) {
        return MapperUtil.map(appointmentDto, Appointment.class);
    }

    public List<AppointmentDto> convertToDtoList(List<Appointment> appointmentList) {
        return MapperUtil.mapList(appointmentList, AppointmentDto.class);
    }

    public List<Appointment> convertToEntityList(List<AppointmentDto> appointmentDtoList) {
        return MapperUtil.mapList(appointmentDtoList, Appointment.class);
    }
}
