//Creación de las barras de una barra en particular identificada por su id
function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div"); 
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Se selecciona todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);

let js = document.getElementById("js");
crearBarra(js);

let php = document.getElementById("php");
crearBarra(php);

let java = document.getElementById("java");
crearBarra(java);

let python = document.getElementById("python");
crearBarra(python);

let ts = document.getElementById("ts");
crearBarra(ts);

let repositorio = document.getElementById("git");
crearBarra(repositorio);

let basesDatos = document.getElementById("bases-de-datos");
crearBarra(basesDatos);

let ingles = document.getElementById("ingles");
crearBarra(ingles);

let ps = document.getElementById("ps");
crearBarra(ps);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posición pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(js, 14, 1, intervalJavascript);
        },100);
        const intervalPHP = setInterval(function(){
            pintarBarra(php, 15, 2, intervalPHP);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 12, 3, intervalJava);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 14, 4, intervalPython);
        },100);
        const intervalTypescript = setInterval(function(){
            pintarBarra(ts, 11, 5, intervalTypescript);
        },100);
        const intervalRepositorio = setInterval(function(){
            pintarBarra(repositorio, 15, 6, intervalRepositorio);
        },100);
        const intervalBasesDeDatos = setInterval(function(){
            pintarBarra(basesDatos, 13, 7, intervalBasesDeDatos);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(ps, 14, 8, intervalPhotoshop);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 10, 9, intervalIngles);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#DC143C";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}