package com.nocountry.backend.service;

import jakarta.mail.MessagingException;

public interface IMailSenderService {

    public void sendEmail(String to, String subject, String text) throws MessagingException;
}