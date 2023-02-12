$(function(){
    $('header .burger').click(function(){
        $(this).toggleClass('burger-active');
        $('header ul').toggleClass('list-active');
        $('.swith-language').toggleClass('leng-active');
        $('header').toggleClass('header-active');
    });

    $('nav li a').click(function() {
        $('.burger').toggleClass('burger-active');
        $('header ul').toggleClass('list-active');
        $('.swith-language').toggleClass('leng-active');
        $('header').toggleClass('header-active');
    });
});
