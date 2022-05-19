var x =10



var persona={
    nombre:"eliub", 
    edad:29,
    direccion:{
        calle:"abedules",
        colonia:"bosques de tlajomulco"
    },
    Saludo:function(){
        console.log(this.nombre)
    }
}; id
persona.salario=1000;
console.log(persona.nombre)
console.log(persona[1]);
console.log(persona["nombre"]);

function AgregarItem ()
{
    var listaPendientes= document.getElementById("Pendientes");
    var txtPendiente=document.getElementById("txtpendiente");
    var NuevoPendiente= document.createElement("li");
    var Text= document.createTextNode(txtPendiente.value);
    NuevoPendiente.appendChild(Text);
    listaPendientes.appendChild(NuevoPendiente);
    txtPendiente.value="";


     
}