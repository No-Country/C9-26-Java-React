package com.nocountry.backend.service;

import jakarta.mail.MessagingException;

public interface IMailSenderService {

    void sendEmail(String to, String subject, String body) throws MessagingException;
}
