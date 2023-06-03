const d = document;
let reg_nombre=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
let reg_mail=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
let reg_msj=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,200}$/;
let f_name =  d.querySelector("#f_name");
let f_email = d.querySelector("#f_email");
let f_msj = d.querySelector("#f_msj");
let focoPrimero = d.querySelector("form input");

focoPrimero.focus();

function validar(){
    f_name.classList.remove("error");
    f_email.classList.remove("error");
    f_msj.classList.remove("error");

    let listaErrores = document.getElementById("errores");
    
    listaErrores.innerHTML="";
    listaErrores

    let listaMsjs = d.querySelector("mensajes");

    return false;

}

console.log("hola");