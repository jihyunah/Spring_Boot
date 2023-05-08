package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	private BoardDAO boardDAO;
	
	@Override
	public void write() {
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setId("hong");
		boardDTO.setName("허균");
		boardDTO.setSubject("홍길동전");
		boardDTO.setContent("불쌍한 사람들을 도와주는 의적!!");
//		boardDTO.setLogtime(null); //timestamp는 따로 주지 않아도 값 부여됨. 
		
		boardDAO.save(boardDTO); //JpaRepository로 가서 insert를 자동으로 하고 돌아옴 
		
		
		boardDTO = new BoardDTO();
		boardDTO.setId("doori");
		boardDTO.setName("김수정");
		boardDTO.setSubject("아기공룡 둘리");
		boardDTO.setContent("빙하타고 내려온 아기 공룡!!");
//		boardDTO.setLogtime(null); //timestamp는 따로 주지 않아도 값 부여됨. 
		
		boardDAO.save(boardDTO); //JpaRepository로 가서 insert를 자동으로 하고 돌아옴 
	}

	@Override
	public List<BoardDTO> getBoardList() {
		return boardDAO.findAll();
	}

}
