package com.nocountry.backend.service;

import com.nocountry.backend.model.MediaResource;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

public interface ICloudinaryService {
    /*Map uploadFile(MultipartFile gifFile);*/


    MediaResource saveMedia(Map uploadResult, String title);



}
