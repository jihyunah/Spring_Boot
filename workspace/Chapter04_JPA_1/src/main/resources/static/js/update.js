$(function() {
   $('#updateDiv').hide();
   
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
                  $('#resultDiv').empty();
                  $('#updateDiv').show();
                  $('#name').val(data.name);
                  $('#id').val(data.id);                  
               }
            },
            error: function(e){
               console.log(e);
            }   
       
          }); 
       }  //if-else
   });
});


// 취소 버튼
$('#resetBtn').click(function(){
   // 강제 이벤트 발생 (취소 버튼 눌렀을 때 '검색' 버튼도 눌림 처리 되도록)
   $('#searchIdBtn').trigger('click');
});


// 수정 버튼
$('#updateBtn').click(function(){
   $('#nameDiv').empty();
   $('#pwdDiv').empty();
   
   if($('#name').val() == ''){
       $('#nameDiv').text('이름 입력');
       $('#nameDiv').css('color', 'crimson');
       $('#nameDiv').css('font-size', '8pt');
       $('#name').focus();
   } else if ($('#pwd').val() == ''){
       $('#pwdDiv').text('비밀번호 입력');
       $('#pwdDiv').css('color', 'crimson');
       $('#pwdDiv').css('font-size', '8pt');
       $('#pwd').focus();
   } else{
         $.ajax({
            type:'post',
            url:'/user/update',
            data:$('#updateForm').serialize(),
            success: function(){
               alert('회원정보를 수정하였습니다');
               location.href='/user/list';
            },
            error: function(err){
               console.log(err);
            }
            
         });
   }
   
});


//서버에서 받아오는 데이터 타입은 'text', 'html', 'xml', 'json' 형식을 지정할 수 있다
//getUser에서 id를 찾으면 제대로 JSON으로 오지만 id가 없으면 JSON으로 오지를 못한다.
//그래서 dataType를 생략해야 한다. (dataType를 생략하면 자료에 맞게 자동으로 형식이 지정된다.)








