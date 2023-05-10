//목록 
$(function(){
	$.ajax({
		type: 'post',
		url: '/user/getUserList',
		success: function(data){
			console.log(JSON.stringify(data));
			
			$.each(data, function(index, item){
				var result = `<tr>
							<td align="center" width="150">${item.name}</td>
							<td align="center" width="150">${item.id}</td>
							<td align="center" width="150">${item.pwd}</td>
							</tr>`;
					   
				$('#userListTable').append(result);
			
			});// $.each
		},
		error: function(err){
			console.log(err);
		}
	});
});

//검색 
$('#searchBtn').click(function(){
	if($('#keyword').val() == ''){
		alert('검색어를 입력하세요')
	} else {
		$.ajax({
			type: 'post',
			url: '/user/search',
			/*
			data: {'searchOption': $('#searchOption').val(),
					'keyword': $('#keyword').val()},
			*/
			data: $('#searchForm').serialize(),
			dataType: 'json',
			success: function(data) {
				console.log(JSON.stringify(data));
				
				$('#userListTable tr:gt(0)').remove(); //0행보다 큰 행의 애들 다 지워버려라 
				$.each(data, function(index, item){
					var result = `<tr>
								  <td align="center">${item.name}</td>
								  <td align="center">${item.id}</td>
								  <td align="center">${item.pwd}</td>
								  </tr>`;
								  
					$('#userListTable').append(result);
				})
			},
			error: function(err){
				console.log(err);
			}
		});
	}
});














