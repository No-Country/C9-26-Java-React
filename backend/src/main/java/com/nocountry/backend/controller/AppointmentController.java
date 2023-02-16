package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.AppointmentDto;
import com.nocountry.backend.dto.AppointmentScheduleDto;
import com.nocountry.backend.service.IAppointmentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final IAppointmentService service;

    @GetMapping("/{appointmentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AppointmentDto> getAppointment(@PathVariable Long appointmentId) {
        AppointmentDto appointmentDto = service.getAppointment(appointmentId);
        if (appointmentDto != null) {
            return new ResponseEntity<>(appointmentDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<AppointmentDto>> getAllAppointments() {
        return new ResponseEntity<>(service.getAllAppointments(), HttpStatus.OK);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AppointmentDto> createAppointment(@RequestBody AppointmentDto appointmentDto) {
        return new ResponseEntity<>(service.createAppointment(appointmentDto), HttpStatus.CREATED);
    }

    @PatchMapping("/{appointmentId}/schedule")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> scheduleAppointment(@RequestBody AppointmentScheduleDto scheduleDto,
            @PathVariable Long appointmentId) {
        if (service.getAppointment(appointmentId) != null) {
            service.scheduleAppointment(scheduleDto, appointmentId);
            return new ResponseEntity<>("Appointment successfully scheduled!", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{appointmentId}/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AppointmentDto> updateAppointment(@RequestBody AppointmentDto appointmentDto,
            @PathVariable Long appointmentId) {
        return new ResponseEntity<>(service.updateAppointment(appointmentDto, appointmentId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{appointmentId}/delete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteAppointment(@PathVariable Long appointmentId) {
        if (service.getAppointment(appointmentId) != null) {
            service.deleteAppointment(appointmentId);
            return new ResponseEntity<>("Appointment successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
