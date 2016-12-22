$(document).ready(function(){
    $('.titlepedido').hide();
    $('.tipos').on('click', function(){
        $('.tipos').removeClass('selected');
        $(this).addClass('selected');
        $('.card-food').show();
        $('.card-food').removeClass('disabled');
        if($(this).text() !== 'Todos'){
            $('.card-food:not(.'+$(this).html()+')').hide();
            $('.card-food:not(.'+$(this).html()+')').addClass('disabled');
        }else{
            $('.tipos').removeClass('selected');
        }
    });

    $('.alerg').on('click', function(){
        $('.alerg').removeClass('selected');
        $(this).addClass('selected');
        $('.card-food:not(.disabled)').fadeTo("slow", 1);
        if($(this).text() !== 'Limpiar') {
            $('.hasalerg_' + $(this).html().replace(' ', '-') + ':not(.disabled)').fadeTo('slow', 0.33);
        }else{
            $('.alerg').removeClass('selected');
        }
    });

    $('.anadirpedido').on('click', function(){
        $('.titlepedido').fadeIn();
        $('.containerpedido').append('<div class="row"><div class="col-xs-offset-1 col-xs-1"><a><i class="fa fa-times quitar"></i></a>&nbsp;</div><div class="col-xs-4">'+$(this).parent().find('.titles').html()+'</div><div class="col-xs-5"><input type="number" value="1" class="cant" data-prize="'+parseFloat($(this).parent().find('.prize').text().replace('€',''))+'"></div></div>');
        getPrize();
        $(".cant").on('keyup change click', function(){
            getPrize();
        });
        $('.containerpedido .fa-times').on('click', function(){
           $(this).parent().parent().parent().remove();
            if($( '.containerpedido' ).children().length == 0) $('.titlepedido').fadeOut();
            getPrize();
        });
    });
});
function getPrize(){
    var prize=0;
    if($('.cant').length > 0){
        $('.cant').each(function(){
            prize+=(((parseFloat($(this).val()) < 0)? 0 : parseFloat($(this).val())) * $(this).data('prize'));
        });
    }
    $('.containerprize').text('Total: '+prize+'€');
}