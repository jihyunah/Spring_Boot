<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%-- <input type="text" id="pg" value="${pg }"> --%>
	<form>
		<table id="listTable" border="1" frame="hsides" rules="rows">
			<tr>
				<th width="150">사진</th>
				<th width="150">이름</th>
				<th width="150">나이</th>
			</tr>

			<!-- 동적 처리 -->

		</table>
	</form>

	<div id="userPagingDiv" style= "margin-top: 3px; width: 470px; text-align: center;">아무글자</div>

<script type="text/javascript">
function userPaging(pg){
		location.href = "/person/list?pg=" + pg;
}
</script>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="/js/list.js"></script>
</body>
</html>