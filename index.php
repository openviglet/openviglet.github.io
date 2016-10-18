<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Viglet</title>

        <meta name="description" content="Viglet é uma empresa que está presente na área de criação e desenvolvimento com diferencial criativo.">
        <meta property="og:title" content="Viglet"/>
        <meta property="og:image" content="http://www.viglet.com/img/viglet_200px.png"/>
        <meta property="og:site_name" content="Viglet"/>
        <meta property="og:url" content="http://www.viglet.com"/>
        <meta property="og:description" content="Viglet é uma empresa que está presente na área de criação e desenvolvimento com diferencial criativo."/>

        <!-- Bootstrap -->
        <link href="thirdparty/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

        <link href="css/sumware.css" rel="stylesheet">
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

    

    </head>
    <body data-spy="scroll" data-target=".navbar-default" >
        <div id="wrap" style="margin-bottom:15px;">
            <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">Viglet</a>
                    </div>
                    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                        <ul class="nav navbar-nav">
                            <li><a href="#quemsomos">Quem Somos</a></li>     
                            <li><a href="#startups">Startups</a></li>
                        </ul>
                    </nav>
                </div><!-- /.container-fluid -->
            </nav>
            <div class="container">
                <div id="quemsomos" class="row">                  
                </div>
                <div class="row row-centered hidden-xs hidden-sm" style="margin-left:-100px;margin-top:100px;">
                    <div class="col-centered col-lg-9" style="text-align: center">
                        <img src="img/banner.jpg">
                    </div>
                </div>
                
                <div >
                    <div  class="row  row-centered" >
                        <div class="col-lg-9 col-centered"  style="margin-top:80px;margin-bottom:80px;text-align:center;font-size: 20px;line-height: 150%">                         
                            <p>Presente na área de criação e desenvolvimento com diferencial criativo.
                            Olhamos para os novos desafios dos projetos como uma grande oportunidade de encontrar soluções que sejam escaláveis e persistentes.
                            Acreditamos que a inovação é chave para atender melhor o cliente.</p>
                        </div>                               
                    </div> 
                    <div id="redesocial" class="row">

                        <div  class="col-lg-12" style="background-color: #6d84b4; text-align:center;margin-top: 30px; padding-bottom: 50px;padding-top: 60px;border-top: 1px solid #e1e1e1;">
                            <a target="_blank" href="https://www.facebook.com/viglet"><img src="img/facebook-icon.png" alt="facebook" width="50" height="50" style="margin-bottom:20px"></a><h3 style="color:white">Acompanhe as novidades do Viglet.<br/>Participe de nossa página no <a style="color:white" target="_blank" href="https://www.facebook.com/viglet">Facebook</a>!</h3>
                        </div>
                    </div>
                    
                     <div id="startups" class="row">

                        <div  class="col-lg-12" style="text-align:center;margin-top: 60px; padding-bottom: 50px;">
                            <h1>Startups com um toque a mais</h1>
                        </div>
                    </div>
                    <div class="row row-centered">

                        <div class="col-lg-7 col-centered" style="text-align:right">
                            <h3>Viglet Turing</h3>                    
                            <p><a class="github-button" href="https://github.com/openviglet/turing" data-style="mega" aria-label="Acompanhe openviglet/turing no GitHub">Acompanhe</a></p>
                            <p>Plataforma que utiliza processamento de linguagem natural (NLP) e aprendizado de máquina para fornecer dados mais inteligentes.
                            Escolha seu NLP preferido como: CoreNLP e OpenText Content Analytics, e indexe seus conteúdos no Solr com maior valor agregado.
                            Treine e gere modelos para sua máquina de aprendizado, como Google Tensorflow.</p>
                        </div>
                        <div class="col-lg-2 col-centered hidden-xs hidden-sm" style="text-align:right">
                            <img src="img/turing.jpg" alt="Cinestamp" width="180" height="180" class="img-circle">

                        </div>
                    </div>    
                    <div class="row row-centered">
                        <div class="col-lg-2 col-centered hidden-xs hidden-sm">
                            <img src="img/mashups.jpg" alt="Recygram" width="180" height="180">

                        </div>
                        <div class="col-lg-7 col-centered">
                            <h3>Viglet Mashups</h3>
                            <p><a class="github-button" href="https://github.com/openviglet/mashups"  data-style="mega" aria-label="Acompanhe openviglet/mashups no GitHub">Acompanhe</a></p>
                            <p>Integre soluções de forma simples e intuitiva, ganhando tempo usando melhores práticas.
                            Utilize Fluxo e plugins desenvolvidos pela comunidade para maximizar a reutilização dos seus dados.
                            Suporte a Máquina de Aprendizado, NLP, Search Engine e Banco de Dados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="container">
                <p style="text-align: center;padding-top:10px">© <?php echo date("Y"); ?> Viglet</p>
            </div>
        </div>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="thirdparty/jquery/dist/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="thirdparty/bootstrap/dist/js/bootstrap.min.js"></script>
        <script>
            $('body').scrollspy({target: '.navbar-default'})
        </script>        
        <script async defer src="https://buttons.github.io/buttons.js"></script>
    </body>

</html>