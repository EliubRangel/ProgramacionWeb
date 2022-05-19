$(document).ready(function(){
    console.log("el dom se ha cargado")
    $("#btnAgregar").click(function(){
        $("ul").append("<li>nuevo item</li>");
    });
    $("#btnLimpiar").click(function(){
        $("li").remove();
    })
})
