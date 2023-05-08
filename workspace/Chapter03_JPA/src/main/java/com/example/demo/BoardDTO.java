package com.example.demo;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Repository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity //이 dto는 테이블과 바로 연결된거라고 알려주는 것.
@Table(name = "board") //얘네를 board 테이블로 쓰겠다. 워크벤치에서 따로 테이블 안 만들어도 됨.
@Data
public class BoardDTO {
	
	@Id //이 Column이 primary key인 것을 알려준다.
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
