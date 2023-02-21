package com.nocountry.backend.service;

public interface IEmailService {

    void sendSimpleMessage(String s, String test_subject, String test_message);

    void confirmationMessage(String username, String pass);
}
