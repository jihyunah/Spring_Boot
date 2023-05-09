<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
* {
background: black;
color: lightgreen;
}
</style>
</head>
<body>
<form>
	<table id="userListTable" border="1" frame="hsides"> <%-- rules="rows" --%>
		<tr>
			<th width="150">이름</th>
			<th width="150">아이디</th>
			<th width="150">비밀번호</th>
		</tr>
	
	</table>

</form>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="../js/list.js"></script>
</body>
</html>