package com.nocountry.backend.controller;

import java.io.IOException;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.repository.IMediaRepository;
import com.nocountry.backend.service.ICloudinaryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/upload")
@RequiredArgsConstructor
public class UploadMediaController {

    private final ICloudinaryService cloudinaryService;

    private final IMediaRepository mediaRepository;

    @PostMapping("/images")
    public ResponseEntity<MediaResource> uploadImage(@RequestParam("file") MultipartFile file,
            @RequestParam("title") String title) throws IOException {
        Map options = ObjectUtils.asMap(
                "folder", "images/",
                "overwrite", true,
                "resource_type", "image",
                "original_filename", title);
        MediaResource response = cloudinaryService.getMediaResource(file, title, options);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/videos")
    public ResponseEntity<MediaResource> uploadVideo(@RequestParam("file") MultipartFile file,
            @RequestParam("title") String title) throws IOException {
        Map options = ObjectUtils.asMap(
                "folder", "videos/",
                "overwrite", true,
                "resource_type", "video",
                "original_filename", title);
        MediaResource response = cloudinaryService.getMediaResource(file, title, options);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Map> deleteMedia(@RequestParam Long id) throws IOException {
        MediaResource mediaToDelete = mediaRepository.getReferenceById(id);
        mediaRepository.delete(mediaToDelete);
        Map response = cloudinaryService.delete(mediaToDelete);
        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }
}
