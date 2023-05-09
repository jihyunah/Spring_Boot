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