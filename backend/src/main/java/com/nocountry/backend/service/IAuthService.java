package com.nocountry.backend.service;

import com.nocountry.backend.dto.AuthRequestDto;
import com.nocountry.backend.dto.AuthResponseDto;
import com.nocountry.backend.dto.RegisterRequestDto;

public interface IAuthService {

    public AuthResponseDto register(RegisterRequestDto request);

    public AuthResponseDto login(AuthRequestDto request);
}
