package com.nocountry.backend.repository;

import com.nocountry.backend.model.MediaResource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMediaRepository extends JpaRepository<MediaResource, Long> {
    void deleteById(Long id);
}