$(function(){
    $('.dock-menu a').on('click',function(){
        $(this).addClass('active');
        $('.dock-menu a').not(this).removeClass('active')
    })
})
