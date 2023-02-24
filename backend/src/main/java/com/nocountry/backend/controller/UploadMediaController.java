package com.nocountry.backend.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.service.ICloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("api/upload")
@RequiredArgsConstructor
public class UploadMediaController {
    private final ICloudinaryService cloudinaryService;
    private final Cloudinary cloudinary;

    @PostMapping("/images")
    public ResponseEntity<MediaResource>  uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("title") String title) throws IOException {
        Map options = ObjectUtils.asMap(
                "folder","images/",
                "public_id",title,
                "overwrite", true,
                "resource_type", "image",
                "original_filename",title
        );

        Map uploadResult = cloudinary.uploader().uploadLarge(file.getBytes(), options);
        MediaResource response = cloudinaryService.saveMedia(uploadResult,title);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/videos")
    public ResponseEntity<MediaResource> uploadVideo(@RequestParam("file") MultipartFile file, @RequestParam("title") String title) throws IOException {
        Map options = ObjectUtils.asMap(
                "folder","videos/",
                "public_id",title,
                "overwrite", true,
                "resource_type", "video",
                "original_filename",title
        );
        Map uploadResult = cloudinary.uploader().uploadLarge(file.getBytes(), options);
        MediaResource response = cloudinaryService.saveMedia(uploadResult,title);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
