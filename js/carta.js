$(document).ready(function(){
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
            $('.hasalerg_' + $(this).html().replace(' ', '-') + ':not(.disabled)').fadeTo("slow", 0.33);
        }else{
            $('.alerg').removeClass('selected');
        }
    });

    $('.anadirpedido').on('click', function(){
        $('.containerpedido').append('<p><a><i class="fa fa-times quitar"></i></a>&nbsp;'+$(this).parent().find('.titles').html()+' - Cantidad: <input type="number" value="1" class="cant" data-prize="'+parseFloat($(this).parent().find('.prize').text().replace('€',''))+'"></p>');
        getPrize();
        $(".cant").on('keyup change click', function(){
            getPrize();
        });
        $('.containerpedido .fa-times').on('click', function(){
           $(this).parent().parent().remove();
            getPrize();
        });
    });
});
function getPrize(){
    var prize=0;
    if($('.cant').length > 0){
        $('.cant').each(function(){
            prize+=(parseFloat($(this).val())*$(this).data('prize'))
        });
    }
    $('.containerprize').text('Total: '+prize+'€');
}