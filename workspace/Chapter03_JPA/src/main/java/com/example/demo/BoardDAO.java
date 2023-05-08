package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//public interface BoardDAO extends JpaRepository<BoardDTO, String>{ //<Entity 클래스, primary key의 자료형>
public interface BoardDAO extends JpaRepository<BoardDTO, Integer>{ //<Entity 클래스, primary key의 자료형>
	
}

/* 
JpaRepository<T, ID>
JpaRepository<엔티티 클래스, primary key의 자료형을 쓰기>

따로 구현체 안만들고, jpaRepository가 알아서 다 해준다. 
*/