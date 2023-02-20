package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.mapper.AppointmentMapper;
import com.nocountry.backend.repository.IAppointmentRepository;
import com.nocountry.backend.service.IAppointmentService;
import com.nocountry.backend.service.IMailSenderService;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements IAppointmentService {

    private final IAppointmentRepository appointmentRepository;

    private final AppointmentMapper appointmentMapper;

    private final IMailSenderService mailSender;

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

        String to = appointmentDto.getEmail();
        String subject = "Nuevo turno programado";
        String body = "Estimado/a " + appointmentDto.getFullName() + "," + "\n\n" +
                "Le informamos que se ha programado un nuevo turno para el día " +
                appointmentDto.getDate() + " a las " + appointmentDto.getSchedule() + "." + "\n\n" +
                "Por favor, tenga en cuenta esta información para su planificación y asegúrese de estar disponible en el día y horario indicados."
                + "\n\n" +
                "Cualquier consulta, no dude en ponerse en contacto con nosotros." + "\n\n" +
                "Atentamente," + "\n" +
                "Bright English";

        try {
            mailSender.sendEmail(to, subject, body);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

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
