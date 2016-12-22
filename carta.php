<?php include 'functions.php'?>
<!DOCTYPE html>
<html>
<head>
    <title>COC</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="node_modules/font-awesome/scss/font-awesome.css">
    <link href="https://fonts.googleapis.com/css?family=Candal|Raleway" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top" id="menu">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed txt-white" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <i class="fa fa-th"></i>
            </button>
            <a class="navbar-brand" href="index.html">COC</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="carta.php" class="text-uppercase"><i class="fa fa-cutlery fa-fw"></i> carta</a></li>
                <li><a href="restaurante.html" class="text-uppercase color-p03"><i class="fa fa-map-marker fa-fw"></i> restaurante</a></li>
                <li><a href="reserva.html" class="text-uppercase"><i class="fa fa-calendar fa-fw"></i> reserva</a></li>
                <li><a href="carta.php" class="text-uppercase"><i class="fa fa-motorcycle fa-fw"></i> pedido</a></li>
                <li><a href="franquicia.html" class="text-uppercase"><i class="fa fa-star fa-fw"></i> franquicia</a></li>
                <li><a href="acceder.html" class="text-uppercase"><i class="fa fa-user fa-fw"></i> acceder</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<section class="p-100">
    <div class="container text-center">
        <h2 class="titles text-center color-p01">Nuestra carta</h2>
        <div class="btn btn-sm button-p01 text-uppercase tipos">Entrantes</div>
        <div class="btn btn-sm button-p01 text-uppercase tipos">Primeros</div>
        <div class="btn btn-sm button-p01 text-uppercase tipos">Segundos</div>
        <div class="btn btn-sm button-p01 text-uppercase tipos">Postres</div>
        <div class="btn btn-sm button-p01 text-uppercase tipos tiposbg">Todos</div>
        <div class="p-25">
            <h4 class="titles text-center color-p03">Alérgenos</h4>
            <div class="btn btn-xs button-p03 text-uppercase alerg">Gluten</div>
            <div class="btn btn-xs button-p03 text-uppercase alerg">Carne</div>
            <div class="btn btn-xs button-p03 text-uppercase alerg">Pescado</div>
            <div class="btn btn-xs button-p03 text-uppercase alerg">Frutos secos</div>
            <div class="btn btn-xs button-p03 text-uppercase alerg alergbg">Limpiar</div>
        </div>
    </div>
</section>

<section class="p-100 bcolor-p08">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8">
                <? $i=0; ?>
                <? foreach(get_dishes() as $key => $value): ?>
                    <? if($i==0): ?>
                        <div class="row">
                    <? endif; ?>
                    <? $i++; ?>
                    <div class="col-md-4 card-food <? echo get_alergen_class($value['alergenos']); echo $value['tipo']; ?>">
                        <div class="card-food2">
                            <p><img src="<? echo $value['foto']; ?>" class="img-food" alt=""></p>
                            <h4 class="titles"><? echo $value['nombre']; ?></h4>
                            <p><? echo $value['descripcion']; ?></p>
                            <h5 class="titles prize color-p03"><? echo $value['precio']; ?>€</h5>
                            <div  class="btn btn-xs button-p05 anadirpedido">Añadir</div>
                        </div>
                    </div>
                    <? if($i==3): ?>
                        </div>
                        <? $i=0; ?>
                    <? endif; ?>
                <? endforeach; ?>
            </div>
            <div class="col-md-4 pedido">
                <h2 class="titles text-center color-p05">Tu pedido</h2>
                <div class="row color-p04 titlepedido"><div class="col-xs-offset-1 col-xs-1"></div><div class="col-xs-4">Plato</div><div class="col-xs-5">Cantidad</div></div>
                <div class="containerpedido"></div>
                <h4 class="titles text-center color-p03 containerprize">Total: 0€</h4>
                <a href="" class="btn btn-md button-p05 titles">Realizar pedido</a>
            </div>
        </div>
    </div>
</section>

<footer id="foot">
    <div class="text-center bcolor-p07 color-p06">
        <div class="container-fluid">
            <div class="row p-25">
                <div class="col-md-6 hidden-xs text-left">
                    <em><strong><p>Síguenos en las redes sociales</p></strong></em>
                </div>
                <div class="col-md-6 col-xs-12 text-right">
                    <i class="fa fa-facebook fa-lg p-10 changec-p06"></i>
                    <i class="fa fa-twitter fa-lg p-10 changec-p06"></i>
                    <i class="fa fa-instagram fa-lg p-10 changec-p06"></i>
                    <i class="fa fa-youtube fa-lg p-10 changec-p06"></i>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/carta.js"></script>
</body>
</html>