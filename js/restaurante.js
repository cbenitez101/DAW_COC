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




});