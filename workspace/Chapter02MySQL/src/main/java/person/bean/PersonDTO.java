package person.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component //생성되어라.
@Data
public class PersonDTO {
	private int seq;
	private String name;
	private int age;
	private String photo;
}
