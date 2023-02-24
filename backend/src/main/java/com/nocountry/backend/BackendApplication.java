package com.nocountry.backend;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import com.nocountry.backend.auth.config.CorsConfig;

import java.util.HashMap;
import java.util.Map;


@SpringBootApplication
@Import(CorsConfig.class)
public class BackendApplication {

	@Value("${CLOUD_NAME}")
	private String CLOUD_NAME ;

	@Value("${API_KEY_CLOUD}")
	private String API_KEY_CLOUD ;

	@Value("${API_SECRET}")
	private String API_SECRET  ;


	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);

	}

	@Bean
	public Cloudinary cloudinaryConfig() {
		Cloudinary cloudinary;
		Map config = new HashMap();
		config.put("cloud_name", CLOUD_NAME);
		config.put("api_key", API_KEY_CLOUD);
		config.put("api_secret", API_SECRET);
		cloudinary = new Cloudinary(config);
		return cloudinary;
	}

}
