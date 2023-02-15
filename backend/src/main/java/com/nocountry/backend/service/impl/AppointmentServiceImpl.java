package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.dto.ScheduleDto;
import com.nocountry.backend.mapper.AppointmentMapper;
import com.nocountry.backend.model.Appointment;
import com.nocountry.backend.repository.IAppointmentRepository;
import com.nocountry.backend.service.IAppointmentService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements IAppointmentService {

    private final IAppointmentRepository appointmentRepository;

    private final AppointmentMapper appointmentMapper;

    private Appointment findAppointmentById(Long AppointmentId) {
        return appointmentRepository.findById(AppointmentId)
                .orElseThrow(() -> new EntityNotFoundException("Appointment not found"));
    }

    @Override
    public AppointmentDto getAppointment(Long AppointmentId) {
        return appointmentMapper.convertToDto(this.findAppointmentById(AppointmentId));
    }

    @Override
    public List<AppointmentDto> getAllAppointments() {
        return appointmentMapper.convertToDtoList(appointmentRepository.findAll());
    }

    @Override
    public AppointmentDto createAppointment(AppointmentDto AppointmentDto) {
        return appointmentMapper
                .convertToDto(appointmentRepository.save(appointmentMapper.convertToEntity(AppointmentDto)));
    }

    @Override
    public void scheduleAppointment(ScheduleDto scheduleDto, Long appointmentId) {
        Appointment updatedAppointment = this.findAppointmentById(appointmentId);
        updatedAppointment.setEmail(scheduleDto.getEmail());
        updatedAppointment.setFullName(scheduleDto.getFullName());
        updatedAppointment.setStatus(true);
    }

    @Override
    public AppointmentDto updateAppointment(AppointmentDto AppointmentDto, Long AppointmentId) {
        Appointment updatedAppointment = this.findAppointmentById(AppointmentId);
        updatedAppointment.setDate(AppointmentDto.getDate());
        updatedAppointment.setSchedule(AppointmentDto.getSchedule());
        updatedAppointment.setEmail(AppointmentDto.getEmail());
        updatedAppointment.setFullName(AppointmentDto.getFullName());
        return appointmentMapper.convertToDto(appointmentRepository.save(updatedAppointment));
    }

    @Override
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

}
