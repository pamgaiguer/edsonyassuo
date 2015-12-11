$(document).ready(function(){

    var viewProjetos = '';

    var galeria =
    {
        "projetos": [
        {
            "name": "Concurso Malvadão",
            "gifPath": "../images/gif/concurso_malvadao.gif",
            "categoria": "",
            "captionProject": "Concurso Malvadão",
            "linkPage": "../work-view-malvadao.php"
        },
        {
            "name": "Assinatura Diário Digital",
            "gifPath": "../images/gif/diario_assinatura.gif",
            "categoria": "",
            "captionProject": "Assinatura Diário Digital",
            "linkPage": "../work-view-assinatura.php"
        },
        {
            "name": "Como Treinar Seu Dragão 2",
            "gifPath": "../images/gif/dragao.gif",
            "categoria": "",
            "captionProject": "Como Treinar Seu Dragão 2",
            "linkPage": "../work-view-dragao.php"
        },
        {
            "name": "PagaPoco",
            "gifPath": "../images/gif/PAGAPOCO.gif",
            "categoria": "",
            "captionProject": "PagaPoco",
            "linkPage": "../work-view-pagapoco.php"
        },
        {
            "name": "Reel",
            "gifPath": "../images/gif/reel.gif",
            "categoria": "",
            "captionProject": "Reel",
            "linkPage": "../work-view-reel.php"
        },
        {
            "name": "Vicentinos",
            "gifPath": "../images/gif/vicentinos.gif",
            "categoria": "",
            "captionProject": "Vicentinos",
            "linkPage": "../work-view-vicentinos.php"
        },
        {
            "name": "Webdesign",
            "gifPath": "../images/gif/webdesign.gif",
            "categoria": "",
            "captionProject": "Webdesign",
            "linkPage": "../work-view-webdesign.php"
        },
        {
            "name": "Zica e os camaleões",
            "gifPath": "../images/gif/zica.gif",
            "categoria": "",
            "captionProject": "Zica e os camaleões",
            "linkPage": "../work-view-zica.php"
        }
        ]
    }

    $.each(galeria.projetos, function(k, e){

        viewProjetos += "<div class='gallery' id=element_'"+k+"'>\
        <a href='" + e.linkPage + "'>\
        <img src='"+ e.gifPath + "'>\
        <div class='caption'>\
        <p>'"+ e.captionProject +"'</p>\
        </div>\
        </a>\
        </div>";

    });

    $("#galeria-home").append(viewProjetos);


});