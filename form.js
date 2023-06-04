
function validar() {
    let reg_nombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
    let reg_mail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    let reg_msj = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{5,200}$/;
    let name = document.querySelector("#f_name").value;
    let email = document.querySelector("#f_email").value;
    let mensaje = document.querySelector("#f_msj").value;
    let correcto=true;
    let errores=document.getElementById("errores");
    errores.innerHTML="";
    console.log(name,email,mensaje);

    if(name.trim()==""){
        let p = document.createElement("p");
        p.innerHTML="Completar nombre";
        errores.appendChild(p);
        correcto=false;
        name = document.getElementById("f_name").focus();
    } else if(reg_name.test(name)){
        let p = document.createElement("p");
        p.innerHTML="Nombre inválido";
        errores.appendChild(p);
        correcto=false;
        name = document.getElementById("f_name").focus();
    }
    if(email.trim()==""){
        let p = document.createElement("p");
        p.innerHTML="Completar correo";
        errores.appendChild(p);
        correcto=false;
        email = document.getElementById("f_email").focus();
    } else if(reg_mail.test(email)){
        let p = document.createElement("p");
        p.innerHTML="Correo inválido";
        errores.appendChild(p);
        correcto=false;
        email = document.getElementById("f_email").focus();
    }
    if(mensaje.trim()==""){
        let p = document.createElement("p");
        p.innerHTML="Completar correo";
        errores.appendChild(p);
        correcto=false;
        mensaje = document.getElementById("f_msj").focus();
    } else if(reg_msj.test(mensaje)){
        let p = document.createElement("p");
        p.innerHTML="Correo inválido";
        errores.appendChild(p);
        correcto=false;
        mensaje = document.getElementById("f_msj").focus();
    }


}

