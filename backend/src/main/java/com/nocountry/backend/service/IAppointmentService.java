package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.AppointmentDto;

public interface IAppointmentService {

    public List<AppointmentDto> getAllAppointments();

    public AppointmentDto getAppointmentById(Long appointmentId);

    public AppointmentDto createAppointment(AppointmentDto appointmentDto);

    public void deleteAppointment(Long appointmentId);
}
