var restaurantes={
    "COC - Maspalomas":{"localidad":'Maspalomas', "provincia": "Las-Palmas", "coord":[-15.586641, 27.768517], "CP":35100, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777},
    "COC - El tablero":{"localidad":'Maspalomas', "provincia": "Las-Palmas", "coord":[-15.586641, 27.768517], "CP":35100, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777},
    "COC - Tafira":{"localidad":'Tafira-Baja', "provincia": "Las-Palmas", "coord":[-15.451307, 28.072883], "CP":00000, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777},
    "COC - Galdar":{"localidad":'Galdar', "provincia": "Las-Palmas", "coord":[], "CP":00000, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777},
    "COC - Telde":{"localidad":'Telde', "provincia": "Las-Palmas", "coord":[], "CP":00000, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777},
    "COC - LaLaguna":{"localidad":'La-Laguna', "provincia": "Santa-Cruz-de-Tenerife", "coord":[], "CP":00000, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777},
    "COC - StaCruz":{"localidad":'Santa-Cruz', "provincia": "Santa-Cruz-de-Tenerife", "coord":[], "CP":00000, "direccion": 'Avda. Pepe Monagas nº44', "telefono": 928777777}
}
$(document).ready(function(){

    $('#errorreserva').hide();
    if ($('#formdate').length > 0){
        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
            dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);

        $('#formdate').datepicker({
            minDate: new Date(),
            altField: "#actualDate"
        });
    }


    $(restaurantes).each(function(index, value){
        $.each(value, function(index2, value2){
            if ($('.'+value2.provincia).length == 0) $('#provincia').append('<option class="'+value2.provincia+'">'+value2.provincia.replace('-', ' ')+'</option>');
            if ($('.'+value2.localidad).length == 0) $('#localidad').append('<option class="'+value2.provincia+' '+ value2.localidad+'">'+value2.localidad.replace('-', ' ')+'</option>');
            $('#restnombre').append('<option class="'+value2.provincia + ' ' + value2.localidad+'">'+index2+'</option>');
        });
    });

    $('select#provincia').on('change', function(event){
        $('#localidad option').show();
        $('#localidad option:not(.'+$('#provincia option:selected').attr('class')+')').hide();
        $('#restnombre option').show();
        $('#restnombre option:not(.'+$('#provincia option:selected').attr('class')+')').hide();
    });

    $('select#localidad').on('change', function(event){
        $('#restnombre option').show();
        $('#restnombre option:not(.'+$('#localidad option:selected').attr('class').split(' ')[1]+')').hide();
    });

    $('#encontrar').on('click', function(){
        var restnombre=restaurantes[$('#restnombre option:selected').html()];
        $('#datosrest').append('Nombre: '+$('#restnombre option:selected').html()+'<br/>');
        $('#datosrest').append('Telefono: '+restnombre['telefono']+'<br/>');
        $('#datosrest').append('Dirección: '+restnombre['direccion']);
    });

    $('#botonreserva').on('click', function(e){
        var vacio=false;
        var datas = Array();
        $('#errorreserva').fadeOut();
        $('.reserva option:selected').each(function(){
            if ($(this).val() == '') vacio=true;
            else datas.push($(this).val());
        });

        $('.reserva input:not(#botonreserva)').each(function(){
            if ($(this).val() == '') vacio=true;
            else datas.push($(this).val());
        });
        var datos={};
        if (!vacio){
            datos={provincia: datas[0], localidad:datas[1], restaurante: datas[2], comensales: datas[3], fecha: datas[4], hora:datas[5]};
            $.ajax({
                url: 'reserva.php',
                type: 'GET',
                data: datos
            }).done(function(){
                vacio=false;
            });
        }else{
            $('#errorreserva').fadeIn();
        }
    });
});