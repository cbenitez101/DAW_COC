<?php
function get_dishes(){
    //  Aquí iría conexión con BD y generaríamos el array que le pasariamos a carta.php
    $dishes[0] = [tipo=>'Entrantes', nombre=>'Nachos con queso', descripcion=>'Nachos con queso de Guía', precio=>5, alergenos=>'Gluten,Frutos-Secos', foto=>'img/plato1.png'];
    $dishes[1] = [tipo=>'Entrantes', nombre=>'Bruschetta', descripcion=>'Bruschetta de carne de baifo', precio=>5, alergenos=>'Gluten,Frutos-Secos', foto=>'img/plato3.png'];
    $dishes[2] = [tipo=>'Entrantes', nombre=>'Gambas al ajillo', descripcion=>'Gambas de El Cotillo al ajillo', precio=>7, alergenos=>'Pescado', foto=>'img/plato1.png'];
    $dishes[3] = [tipo=>'Primeros', nombre=>'Pollo en Salsa', descripcion=>'Trozos de pollo en salsa casera', precio=>10, alergenos=>'Gluten,Carne,Frutos-Secos', foto=>'img/plato2.png'];
    $dishes[4] = [tipo=>'Primeros', nombre=>'Hamburguesa Majorera', descripcion=>'Hamburguesa de carne de Cabra', precio=>7.5, alergenos=>'Gluten,Carne', foto=>'img/plato2.png'];
    $dishes[5] = [tipo=>'Primeros', nombre=>'Ropa Vieja de la Casa', descripcion=>'Especialidad de la casa', precio=>7, alergenos=>'Carne', foto=>'img/plato3.png'];
    $dishes[6] = [tipo=>'Segundos', nombre=>'Potaje de berros', descripcion=>'Potaje de berros de la huerta', precio=>8, alergenos=>'Carne,Frutos-Secos', foto=>'img/plato3.png'];
    $dishes[7] = [tipo=>'Segundos', nombre=>'Carne de cochino', descripcion=>'Carne de cochino negro canario frito', precio=>8, alergenos=>'Carne', foto=>'img/plato1.png'];
    $dishes[8] = [tipo=>'Postres', nombre=>'Banana Split', descripcion=>'Banana Split con platano de la tierra', precio=>4,5, alergenos=>'Gluten,Frutos-Secos', foto=>'img/plato2.png'];
    return $dishes;
}
function get_alergen_class($alergenos){
    $str='';
    $array_alerg = explode(',', $alergenos);
    foreach($array_alerg as $key => $value){
        $str .= ' hasalerg_'.$value.' ';
    }
    return $str;
}
