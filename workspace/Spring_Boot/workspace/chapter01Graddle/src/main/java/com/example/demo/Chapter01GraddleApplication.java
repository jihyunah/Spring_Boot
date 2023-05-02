package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Chapter01GraddleApplication {

	public static void main(String[] args) {
		//SpringApplication.run(Chapter01GraddleApplication.class, args);
		SpringApplication springApplication = new SpringApplication(Chapter01GraddleApplication.class);
		springApplication.setWebApplicationType(WebApplicationType.NONE);
		springApplication.run(args);
	}

}
