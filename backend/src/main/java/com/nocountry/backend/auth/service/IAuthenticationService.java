package com.nocountry.backend.auth.service;

import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;

public interface IAuthenticationService {

    public AuthResponseDto register(AuthRequestDto request);

    public AuthResponseDto authenticate(AuthRequestDto request);
}
