$('#searchIdBtn').click(function(){
	$('#resultDiv').empty();
	
	if($('#searchId').val().trim() == ''){
		$('#resultDiv').text('먼저 아이디를 입력');
		$('#resultDiv').css('color', 'pink');
		$('#searchId').focus();
	} else {
		$.ajax({
			type: 'post',
			url: '/user/searchId',
			data: 'id=' + $('#searchId').val(),
			dataType: 'text',
			success: function(data){
				if(data == 'non_exist'){
					$('#resultDiv').text('수정 할 아이디가 없습니다.');
					$('#resultDiv').css('color', 'pink');
				} else if(data =='exist'){
					var result = `<form id="writeForm">
									<table border="1">
										<tr>
											<th>이름</th>
											<td><input type="text" name="name" value="${data.name}"></td>
										</tr>
										<tr>
											<th>아이디</th>
											<td>
												<input type="text" name="id" id="id" value="${data.id}">
												<div id="idDiv"></div>	
											</td>
										</tr>
											<td colspan="2" align="center">
												<input type="button" value="수정" id="updateBtn">
												<input type="reset" value="취소">
											</td>
										</tr>
									</table>
								</form>`;
								
								$('#resultDiv').append(result);
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	}
});