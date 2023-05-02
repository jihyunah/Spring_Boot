package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloGraddleApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloGraddleApplication.class, args);
		System.out.println("Hello SpringBoot");
	}

}
