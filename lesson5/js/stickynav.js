$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('navigation').addClass('sticky')
    } else{
        $('navigation').removeClass('sticky')
    }
});