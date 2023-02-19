package com.nocountry.backend.auth.service;

import com.nocountry.backend.auth.dto.AuthRequestDto;
import com.nocountry.backend.auth.dto.AuthResponseDto;
import com.nocountry.backend.auth.dto.RegisterRequestDto;

public interface IAuthService {

    public AuthResponseDto register(RegisterRequestDto request);

    public AuthResponseDto login(AuthRequestDto request);
}
