$('#modeChangeBtn').on('click',function(){
    $('.login-wrap').toggleClass('customer');
    if($('.login-wrap').hasClass('customer')){
        $('.login-title p').text('고객 로그인')
    }else{
        $('.login-title p').text('점주 로그인')
    }
})