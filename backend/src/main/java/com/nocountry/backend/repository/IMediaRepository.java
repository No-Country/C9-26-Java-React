package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.MediaResource;

public interface IMediaRepository extends JpaRepository<MediaResource, Long> {

    void deleteById(Long id);
}