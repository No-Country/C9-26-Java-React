package com.nocountry.backend.service;

import com.nocountry.backend.dto.AuthenticationRequestDto;
import com.nocountry.backend.dto.AuthenticationResponseDto;

public interface AuthenticationService {

    public AuthenticationResponseDto register(AuthenticationRequestDto request);

    public AuthenticationResponseDto authenticate(AuthenticationRequestDto request);
}
