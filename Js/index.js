

const usuario = document.getElementById("nombre");
const contraseña = document.getElementById("contraseña");

const form1 = document.querySelector(".btnIngresar");


let usuarioBD = "10434"
let contraseñaBD = "43401"
let extraerU = usuarioBD.slice(0, 1)
let extraerC = contraseñaBD.slice(0, 1)


form1.addEventListener("click", function (e) {
    e.preventDefault();

    if (usuario.value !== usuarioBD && contraseña.value !== contraseñaBD) {
        alert("Usuario o Contraseña incorrecta")
        return
    }
     alert ("Contraseña correcta, proceda a ingresar la suma en pantalla")
     mostrarCapchat(extraerU, extraerC);
    
})

const mostrarCapchat = (extraerU, extraerC) =>{
    // Pintar el formulario

    const capchat = document.querySelector(".login2"); 

    capchat.innerHTML = `
                            <form class="contenedor2" id="contenedor2">
                                <h1 >Captcha suma</h1>

                                <div class="form-suma">
                                <div id="sumas"></div>
                                <input type="number" placeholder="Respuesta" id="suma">
                                </div>

                                <button class="btn2">Guardar</button>
                            </form>
                          `
    // Fin

    sumas.textContent = (`${extraerU}+${extraerC}`);
    
    const form2 = document.querySelector(".btn2");

    form2.addEventListener("click", function (e) {
        e.preventDefault();

        const suma = document.getElementById("suma").value;
        const resultado = Number(extraerU) + Number(extraerC)
        if (suma != resultado) {
            alert("respuesta incorrecta")
            return
        }
        alert('BIENVENIDO SEÑOR USUARIO')

    })
}



