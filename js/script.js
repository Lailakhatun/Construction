$(function(){

var navOff = $('.mainbar').offset().top;
$(window).scroll(function(){
var scrolling = $(this).scrollTop();

if (scrolling > navOff){
    $('.mainbar').addClass('menu_fix');
}
else{
    $('.mainbar').removeClass('menu_fix');
}




});




});