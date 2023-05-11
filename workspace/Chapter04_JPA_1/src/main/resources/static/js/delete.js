$(function() {
   // 아이디 찾기
   $('#searchIdBtn').click(function(){
      $('#resultDiv').empty();
      
      if($('#searchId').val() == ''){
          $('#resultDiv').text('아이디 입력');
          $('#resultDiv').css('color', 'crimson');
          $('#resultDiv').css('font-size', '8pt').css('font-weight','bold');
          $('#resultDiv').focus();
       } else{
       
          $.ajax({
            type:'post',
            url:'/user/getUser',
            data:'id=' + $('#searchId').val(),
            success: function(data){
				//Optional<UserDTO> 값이 잇으면 json으로 오고 없으면 null로 온다.
               console.log(JSON.stringify(data));
               
               if(data == null){
                  $('#updateDiv').hide();
                  
                  $('#resultDiv').text('찾고자 하는 아이디가 없습니다');
                  $('#resultDiv').css('color', 'crimson').css('font-size', '8pt').css('font-weight','bold');
                              
               }else{
				   //삭제
				   if(confirm('정말로 삭제하시겠습니까?')){
					   $.ajax({
						   type: 'post',
						   url: '/user/delete',
						   data: 'id=' + $('#searchId').val(),
						   success: function(){
							   alert('삭제 완료');
							   location.href='/user/list';
						   },
						   error: function(err){
							   console.log(err);
						   }
					   });
				   }//if     
               }
            },
            error: function(err){
               console.log(err);
            }   
       
          }); 
       }  //if-else
   });
});
