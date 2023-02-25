package com.nocountry.backend.service.impl;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.model.MediaResource;
import com.nocountry.backend.repository.IMediaRepository;
import com.nocountry.backend.service.ICloudinaryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements ICloudinaryService {

    private final IMediaRepository mediaRepository;

    private final Cloudinary cloudinary;

    @Override
    public MediaResource saveMedia(Map uploadResult, String title) {
        MediaResource media = new MediaResource();
        media.setUrlSecure(uploadResult.get("url").toString());
        media.setTitle(title);
        media.setTypeFormat(uploadResult.get("resource_type").toString());
        media.setBytes((Integer) uploadResult.get("bytes"));
        media.setPublicId(uploadResult.get("public_id").toString());
        mediaRepository.save(media);
        return media;
    }

    public MediaResource getMediaResource(MultipartFile file, String title, Map options) throws IOException {
        Map uploadResult = cloudinary.uploader().uploadLarge(file.getBytes(), options);
        return saveMedia(uploadResult, title);
    }

    public Map delete(MediaResource mediaToDelete) throws IOException {
        return cloudinary.uploader()
                .destroy(mediaToDelete.getPublicId(),
                        ObjectUtils.asMap(
                                "resource_type", mediaToDelete.getTypeFormat()));
    }
}
