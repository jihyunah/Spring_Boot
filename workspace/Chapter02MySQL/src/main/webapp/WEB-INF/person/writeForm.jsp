<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form id="writeForm">
<table border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th>이름</th>
		<td>
			<input type="text" name="name" id="name">
		</td>
	</tr>
	<tr>
		<th>나이</th>
		<td>
			<input type="text" name="age" id="age">
		</td>
	</tr>
	<tr>
		<td colspan="2" align="center">
			<img width="70" height="70" id="showImg">
			<img alt="카메라" id="camera" src="/img/camera.png" width="30" height="30">
			<input type="file" name="img" id="img" style="visibility: hidden;">
		</td>
	</tr>
	<tr>
		<td colspan="2" align="center">
			<input type="button" value="등록" id="writeBtn">
			<input type="reset" value="취소">
		</td>
	</tr>
	
</table>
</form>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="/js/write.js"></script>
<script type="text/javascript">
$('#camera').click(function(){
	//강제 이벤트 발생 
	$('#img').trigger('click');
});

<!-- 업로드 버튼을 누르기 전에 카메라 아이콘을 통해서 선택한 이미지가 맞는지 확인하기 위해서 이미지를 보이게 한다. -->
$('#img').change(function(){
	readURL(this); //이벤트 발생한 나 img를 들고 글로 이동해. 
});
function readURL(input){
	var reader = new FileReader(); //자바 스크립트 객체임 
	
	reader.onload = function(e){	//읽어들여라 
		$('#showImg').attr('src', e.target.result); //e.target => event 발생한 아이의 결과를 가져와라 
	} 
	reader.readAsDataURL(input.files[0]); //이렇게 하면 첫번째 사진만 불려 들어올 수 있음. 
}
</script>
</body>
</html>