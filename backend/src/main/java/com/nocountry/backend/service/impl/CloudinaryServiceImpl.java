package com.nocountry.backend.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.repository.IMediaRepository;
import com.nocountry.backend.service.ICloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements ICloudinaryService {
    private final Cloudinary cloudinaryConfig;
    private final IMediaRepository mediaRepository;

    @Override
    public MediaResource saveMedia(Map uploadResult, String title) {

        MediaResource media = new MediaResource();

        media.setUrlSecure(uploadResult.get("url").toString());
        media.setTitle(title);
        media.setTypeFormat(uploadResult.get("resource_type").toString());
        media.setBytes((Integer)uploadResult.get("bytes"));
        mediaRepository.save(media);
        return media;
    }


}
