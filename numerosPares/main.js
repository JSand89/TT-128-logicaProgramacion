let calcular  = document.getElementById("btn");
let entrada = document.getElementById("entrada");
let salida = document.getElementById("salida");
let numero = 0;

entrada.addEventListener("input",(evento) => {
    numero = evento.target.value;
    console.log(numero);
});
// ya tenemos el par, ahora vamos a poner que me diga si es oar y multiplo de 5
calcular.addEventListener("click",()=>{
    let hijo = document.createElement("li")
    if(numero%2 == 0){
        hijo.innerHTML = numero + " es par";
    }
    else{
        hijo.innerHTML = numero + " No es par";
    }
    salida.appendChild(hijo);
});
