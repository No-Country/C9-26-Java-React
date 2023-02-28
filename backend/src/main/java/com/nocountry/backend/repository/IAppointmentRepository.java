package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Appointment;

public interface IAppointmentRepository extends JpaRepository<Appointment, Long> {

    Appointment findByDateAndSchedule(String date, String schedule);
}
