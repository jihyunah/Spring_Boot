//등록
$('#writeBtn').click(function(){
	$.ajax({
		type: 'post',
		url: '/user/write',
		data: $('#writeForm').serialize(), //form 안의 모든 데이터를 문자열 형태로 가져온다. ex 'name=홍길동&id=hong&pwd=111'
		success: function(){
			alert('등록 완료');
		},
		error: function(err){
			console.log(err);
		}
	});
});


//아이디 중복체크 
$('#id').focusout(function(){
	$('#idDiv').empty();
	
	if($('#id').val() == ''){
		$('#idDiv').text('먼저 아이디를 입력');
		$('#id').focus();
	} else {
		$.ajax({
			type: 'post',
			url: '/user/isExistId',
			data: 'id=' + $('#id').val(),
			dataType: 'text',
			success: function(data){
				if(data == 'exist'){
					$('#idDiv').text('사용 불가능');
					$('#idDiv').css('color', 'pink');
				} else if(data == 'non_exist'){
					$('#idDiv').text('사용 가능');
					$('#idDiv').css('color', 'skyblue');
				}
			},
			error: function(err){
				console.log(err);
			}
			
		});
	}
});