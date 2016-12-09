$(document).ready(function(){
    $('.tipos').on('click', function(){
        $('.card-food').show();
        $('.card-food:not(.'+$(this).html()+')').hide();
    });

    $('.alerg').on('click', function(){
        $('.card-food').show();
        if($(this).html() == 'Frutos secos') $('.hasalerg_'+$(this).html().replace(' ', '-')).hide();
        $('.hasalerg_'+$(this).html()).hide();
    });


});
