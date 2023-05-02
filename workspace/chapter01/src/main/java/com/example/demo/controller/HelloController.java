package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
//@Controller
@RestController
public class HelloController {
	public HelloController() {
		System.out.println("HelloController 기본 생성자");
	}
	
	@GetMapping(value="/hello")
	//@ResponseBody
	public String hello(String name) {
		return "안녕하세요 "+ name+ "님";
	}//@Controller로 잡을 시에는 반드시 ResponseBody를 잡아줘야 jsp가 아닌 문자열로 인식

}
