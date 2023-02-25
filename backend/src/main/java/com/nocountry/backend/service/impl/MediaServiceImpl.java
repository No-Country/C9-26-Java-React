package com.nocountry.backend.service.impl;

import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.repository.IMediaRepository;
import com.nocountry.backend.service.IMediaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MediaServiceImpl implements IMediaService {

    private final IMediaRepository mediaRepository;

    @Override
    public void delete(Long id) {
        mediaRepository.deleteById(id);
    }
}
