package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //얘를 쓰면 Responsebody 안써도 문자열로 처리한다.
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@GetMapping(value = "/board/write")
	public String write() {
		boardService.write();
		return "게시판 등록 성공"; // 문자열을 브라우저에 뿌림 
	}
	
	@GetMapping(value = "/board/getBoardList")
	public List<BoardDTO> getBoardList() {
		List<BoardDTO> list = boardService.getBoardList();
		return list;
	}
}
