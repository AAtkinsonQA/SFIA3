package com.qa.get;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class GetApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetApplication.class, args);
	}

}
