$('.basket-starter').on('click',function(e){
    e.stopPropagation();
   if( $(this).hasClass('basket-starter')){
        console.log($(this))
       $('.basket').toggleClass('show');
   }
    e.stopPropagation();
   
})
$('.basket').on('click',function(event){
    event.stopPropagation();
})
$(window).on('click',function(event){
    $('.basket').removeClass('show');
})
// 헤더 검색!
var headerMenuEls = $('header ul.menu > li')
var searchDelayEls = $('.search li')
$('.search-starter').on('click',function(){
   showSearch();
})

$('.search-closer').on('click',function(){
   hideSearch();
})

$('.shadow').on('click',function(){
    hideSearch();
})

function showSearch(){
    $('header').addClass('searching')
    var reverse = $(headerMenuEls.get().reverse())
    reverse.each(function(index,el){
        var delay = index * .4/ headerMenuEls.length;
        $(el).css('transition-delay', delay + 's')
    })
    searchDelayEls.each(function(index,el){
        var delay = index * .4/searchDelayEls.length;
        $(el).css('transition-delay',delay +'s')
    })
}
function hideSearch(){
    $('header').removeClass('searching')
    headerMenuEls.each(function(index,el){
        var delay = index * .4 / headerMenuEls.length;
        $(el).css('transition-delay', delay + 's')
    })
    var reverse = $(searchDelayEls.get().reverse())
    reverse.each(function(index,el){
        var delay = index * .4/searchDelayEls.length;
        $(el).css('transition-delay',delay +'s')
    })
}

const swiper = new Swiper(".swiper",{
    speed : 500,
    slidesPerView : '2.1',
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor : true,
    loop :true,
    effect : 'coverflow'
})

const swiper1 = new Swiper(".swiper1",{
    speed : 500,
    slidesPerView : '4.1',
    loop :true,
    grabCursor : true,
    spaceBetween: 10,
    effect : 'coverflow'
    
})
const swiper2 = new Swiper(".swiper2",{
    speed : 500,
    slidesPerView : '5',
    loop :true,
    grabCursor : true,
    spaceBetween: 10,
    
    
})

