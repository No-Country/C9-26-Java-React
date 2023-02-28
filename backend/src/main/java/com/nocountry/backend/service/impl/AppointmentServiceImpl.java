package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.mapper.AppointmentMapper;
import com.nocountry.backend.model.Appointment;
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

        String to = appointment.getEmail();
        String subject = "Información sobre " + appointment.getDescription();
        String text = "<html><body>"
                + "<p>Estimado/a " + appointment.getFullName() + ",</p>"
                + "<p>Le informamos que se ha programado un nuevo turno para el día " + appointment.getDate()
                + " a las " + appointment.getSchedule() + ".</p>"
                + "<p>Por favor, asegúrese de estar disponible en el día y horario indicados y tenga en cuenta que la entrevista se realizará de manera online.</p>"
                + "<p>Para garantizar una buena experiencia de entrevista, es importante disponer de un dispositivo con conexión estable a internet, cámara y micrófono.</p>"
                + "<p>Cualquier consulta, no dude en ponerse en contacto con nosotros.</p>"
                + "<p>Atentamente,<br>Bright English</p>"
                + "</body></html>";

        try {
            mailSender.sendEmail(to, subject, text);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return appointmentMapper.convertToDto(appointmentRepository.save(appointment));
    }

    @Override
    public AppointmentDto updateAppointment(Long appointmentId, AppointmentDto appointmentDto) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();

        if (appointmentDto.getDate() != null) {
            appointment.setDate(appointmentDto.getDate());
        }

        if (appointmentDto.getSchedule() != null) {
            appointment.setSchedule(appointmentDto.getSchedule());
        }

        if (appointmentDto.getDescription() != null) {
            appointment.setDescription(appointmentDto.getDescription());
        }

        if (appointmentDto.getEmail() != null) {
            appointment.setEmail(appointmentDto.getEmail());
        }

        if (appointmentDto.getFullName() != null) {
            appointment.setFullName(appointmentDto.getFullName());
        }

        var scheduledAppointment = appointmentRepository.save(appointment);

        return appointmentMapper.convertToDto(scheduledAppointment);
    }

    @Override
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}