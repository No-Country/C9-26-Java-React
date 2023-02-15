package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.AppointmentDto;

public interface IAppointmentService {

    Optional<AppointmentDto> getAppointment(Long appointmentId);

    List<AppointmentDto> getAllAppointments();

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    AppointmentDto updateAppointment(AppointmentDto appointmentDto, Long appointmentId);

    void deleteAppointment(Long appointmentId);
}
