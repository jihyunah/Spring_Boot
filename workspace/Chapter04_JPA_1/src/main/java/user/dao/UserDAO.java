package user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import user.bean.UserDTO;

@Repository
public interface UserDAO extends JpaRepository<UserDTO,String>{
	//추상메소드의 구현체는 JpaRepository가 만들어줌
	
	//쿼리 메소드
//	//select * from usertable where name like '%' || ? || '%'
//	public List<UserDTO> findByNameContaining(String keyword);
//	
//	//select * from usertable where id like '%' || ? || '%'
//	public List<UserDTO> findByIdContaining(String keyword);

	
	//----------------------------------------------------
	//어노테이션
	//검색 대상이 테이블이 아니라 영속성 컨텍스트에 등록된 엔티티이다. 대소문자 구분하여 정확하게 지정해야 함.
	//UserDTO dto = new UserDTO(); 라 잡으면 select dto from UserDTO 라 하면 된다. 여기선 * 이런 거 사용하면 안 됨.
	//?1는 첫번째 파라미터를 의미한다. (String keyword, String cc, String dd) 이런식이라면
	//?1은 keyword이고 ?2는 cc이고 ?3는 dd이다.
	
//	@Query("select dto from UserDTO dto where dto.name like '%' || ?1 || '%'")
//	public List<UserDTO> getUserSearchName(String keyword);
//	
//	@Query("select dto from UserDTO dto where dto.id like '%' || ?1 || '%'")
//	public List<UserDTO> getUserSearchId(String keyword);
	
	@Query("select dto from UserDTO dto where dto.name like '%' || :keyword || '%'")
	public List<UserDTO> getUserSearchName(String keyword);
	
	@Query("select dto from UserDTO dto where dto.id like '%' || :keyword || '%'")
	public List<UserDTO> getUserSearchId(String keyword);
}