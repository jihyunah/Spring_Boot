package user.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "usertable")
@Data
public class UserDTO {
	@Column(name = "name", nullable = false, length = 30) //null값 허용 X
	private String name;
	
	@Id //primary key
	@Column(name = "id", length = 30)
	private String id;
	
	@Column(name = "pwd", nullable = false, length = 30)
	private String pwd;
	
}
