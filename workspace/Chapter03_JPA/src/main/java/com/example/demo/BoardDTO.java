package com.example.demo;

import java.security.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Repository;

import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Table(name = "board") //얘네를 board 테이블로 쓰겠다. 워크벤치에서 따로 테이블 안 만들어도 됨.
public class BoardDTO {
	
	@Column(name = "id", nullable = false, unique = true, length = 30) //null값 허용 X, 공통 안되게, 길이 30 
	private String id;
	
	@Column(name = "name", nullable = false, length = 30) //varchar(30)
	private String name;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "content")
	private String content;
	
	@CreationTimestamp //엔티티가 생성되는 시점의 시간 등록 
	private Timestamp logtime;
}
