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