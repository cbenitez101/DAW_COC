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

    $('.anadirpedido').on('click', function(){
        $('.containerpedido').append('<p><a><i class="fa fa-times quitar"></i></a>&nbsp;'+$(this).parent().find('.titles').html()+' Cantidad: <input type="number" class="cant"></p>');
    });

    $('.containerpedido .fa-times').on('click', function(){
        console.log($(this));
       // $(this).parent().remove();
    });

});
