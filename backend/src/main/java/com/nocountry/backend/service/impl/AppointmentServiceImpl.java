package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.mapper.AppointmentMapper;
import com.nocountry.backend.repository.IAppointmentRepository;
import com.nocountry.backend.service.IAppointmentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements IAppointmentService {

    private final IAppointmentRepository appointmentRepository;

    private final AppointmentMapper appointmentMapper;

    @Override
    public List<AppointmentDto> getAllAppointments() {
        return appointmentMapper.convertToDtoList(appointmentRepository.findAll());
    }

    @Override
    public AppointmentDto getAppointmentById(Long appointmentId) {
        return appointmentMapper.convertToDto(appointmentRepository.findById(appointmentId).orElseThrow());
    }

    @Override
    public AppointmentDto createAppointment(AppointmentDto appointmentDto) {
        var appointment = appointmentMapper.convertToEntity(appointmentDto);
        return appointmentMapper.convertToDto(appointmentRepository.save(appointment));
    }

    @Override
    public AppointmentDto updateAppointment(Long appointmentId, AppointmentDto appointmentDto) {
        return null;
    }

    @Override
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}
