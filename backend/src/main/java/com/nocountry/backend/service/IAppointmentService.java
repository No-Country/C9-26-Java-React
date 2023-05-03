package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.AppointmentDto;

public interface IAppointmentService {

<<<<<<< HEAD
    List<AppointmentDto> getAllAppointments();

    AppointmentDto getAppointmentById(Long appointmentId);

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    AppointmentDto scheduleAppointment(Long appointmentId, AppointmentDto appointmentDto);

    void deleteAppointment(Long appointmentId);
=======
    public List<AppointmentDto> getAllAppointments();

    public AppointmentDto getAppointmentById(Long appointmentId);

    public AppointmentDto createAppointment(AppointmentDto appointmentDto);

    public void deleteAppointment(Long appointmentId);
>>>>>>> backend-develop
}
