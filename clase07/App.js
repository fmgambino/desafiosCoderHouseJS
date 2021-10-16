//EJEMPLO 4 
$(document).ready(function(){
    const APIURL='https://jsonplaceholder.typicode.com/post';

    const infoPost = {nombre: "Ana", profesion: "programadora"}

    $("body").prepend('<button id="btn1">Enviar API</button>');

    $("#btn1").click (() => {

        $.ajax ( {
            method: "post",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                $("body").prepend(
                    `<di>${}`
                )
            }
        })
    })


})