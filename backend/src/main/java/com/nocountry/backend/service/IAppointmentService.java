package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.AppointmentDto;

public interface IAppointmentService {

    List<AppointmentDto> getAllAppointments();

    AppointmentDto getAppointmentById(Long appointmentId);

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    void deleteAppointment(Long appointmentId);
}
