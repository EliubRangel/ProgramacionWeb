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