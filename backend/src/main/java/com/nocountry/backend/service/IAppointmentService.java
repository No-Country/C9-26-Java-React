package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.dto.ScheduleDto;

public interface IAppointmentService {

    AppointmentDto getAppointment(Long appointmentId);

    List<AppointmentDto> getAllAppointments();

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    AppointmentDto updateAppointment(AppointmentDto appointmentDto, Long appointmentId);

    void deleteAppointment(Long appointmentId);

    void scheduleAppointment(ScheduleDto scheduleDto, Long appointmentId);
}
