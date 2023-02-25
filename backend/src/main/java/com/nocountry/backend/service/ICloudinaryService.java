package com.nocountry.backend.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.nocountry.backend.model.MediaResource;

public interface ICloudinaryService {

    /* Map uploadFile(MultipartFile gifFile); */

    MediaResource saveMedia(Map uploadResult, String title);

    public Map delete(MediaResource mediaToDelete) throws IOException;

    MediaResource getMediaResource(MultipartFile file, String title, Map options) throws IOException;
}
