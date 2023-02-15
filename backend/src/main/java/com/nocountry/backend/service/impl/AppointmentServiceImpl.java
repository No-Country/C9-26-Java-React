package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.mapper.AppointmentMapper;
import com.nocountry.backend.model.Appointment;
import com.nocountry.backend.repository.IAppointmentRepository;
import com.nocountry.backend.service.IAppointmentService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements IAppointmentService {

    private final IAppointmentRepository repository;

    private final AppointmentMapper mapper;

    private Appointment findAppointmentById(Long AppointmentId) {
        return repository.findById(AppointmentId)
                .orElseThrow(() -> new EntityNotFoundException("Appointment not found"));
    }

    @Override
    public Optional<AppointmentDto> getAppointment(Long AppointmentId) {
        return Optional.ofNullable(mapper.convertToDto(this.findAppointmentById(AppointmentId)));
    }

    @Override
    public List<AppointmentDto> getAllAppointments() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public AppointmentDto createAppointment(AppointmentDto AppointmentDto) {
        return mapper.convertToDto(repository.save(mapper.convertToEntity(AppointmentDto)));
    }

    @Override
    public AppointmentDto updateAppointment(AppointmentDto AppointmentDto, Long AppointmentId) {
        Appointment updatedAppointment = this.findAppointmentById(AppointmentId);
        updatedAppointment.setDate(AppointmentDto.getDate());
        updatedAppointment.setSchedule(AppointmentDto.getSchedule());
        updatedAppointment.setEmail(AppointmentDto.getEmail());
        updatedAppointment.setFullName(AppointmentDto.getFullName());
        updatedAppointment.setStatus(AppointmentDto.getStatus());
        return mapper.convertToDto(repository.save(updatedAppointment));

    }

    @Override
    public void deleteAppointment(Long id) {
        repository.deleteById(id);
    }
}
