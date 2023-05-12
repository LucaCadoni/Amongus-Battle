var posAttuale = 1;
var btn;
var su;
var giu;
const colori = ["#ffffff", "#CCCCFF", "#FFA500", "#ADD8E6"];
var misure = ["-18vw", "-100%", "10vw", "30%", "-18vw", "150%"];
var tempoInit = -2000;
var windowSizeAtt;
var windowSizePrec;
var contPianeti;
var canvas;
var ctx;
var contAmogus;
var imgAmogus;


window.onselectstart = function(){return false;}

window.addEventListener("resize", function(){
    windowSizeAtt = window.innerWidth;
    controllaSize();
});

function controllaSize(){
    if(windowSizePrec > 500 && windowSizeAtt <= 500){
        /*setTimeout(function(){*/
            misure =  ["-150%", "-100%", "20%", "30%", "150%", "-100%"];
            posAttuale = 1;
            su.style.display = "block";
            giu.style.display = "block";
            spostaPianeti(btn);
       /*}, 1000);*/
        /*setTimeout(function(){*/
        /*}, 2000);*/
    }else if(windowSizePrec <= 500 && windowSizeAtt > 500){
        /*setTimeout(function (){*/
            misure =  ["-18vw", "-100%", "10vw", "30%", "-18vw", "150%"];
            posAttuale = 1;
            su.style.display = "block";
            giu.style.display = "block";
            spostaPianeti(btn);
        /*}, 1000);
        setTimeout(function(){*/
        /*}, 2000);*/
    }

    windowSizePrec = windowSizeAtt;
}

window.addEventListener("load", function init(){
    if(window.location.search != ""){
        initDati();
    }
    else{
        nomi[0] = "P1";
        nomi[1] = "P2";
        soldi[0] = "100";
        soldi[1] = "100";
        skin1 = [1, 2];
        skin2 = [1, 2];
    }

    su = document.querySelector(".arrow-up");
    giu = document.querySelector(".arrow-down");
    btn = document.getElementsByClassName("btn-planet");
    document.getElementById("nome1").value = nomi[0];
    document.getElementById("nome2").value = nomi[1];
    document.getElementById("money1").innerText = soldi[0];
    document.getElementById("money2").innerText = soldi[1];

    /*contPianeti = document.querySelector(".pianeti");*/
    windowSizeAtt = window.innerWidth;
    (windowSizeAtt > 500 ? windowSizePrec = 500 : windowSizePrec = 501);
    controllaSize();

    /*spostaPianeti(btn);*/
    canvas = document.getElementById("spazio");
    ctx = canvas.getContext('2d');
    generaStelle();
    console.log(btn);
    contAmogus = document.getElementById("amogusRain");
    imgAmogus = document.getElementsByClassName("imgAmogus");
    for(let i=0; i<imgAmogus.length; i++){
        imgAmogus[i].style.left = "50%";
        imgAmogus[i].style.top = (i * 20).toString() + "%";
        imgAmogus[i].src = "img/skin/amogus" + Math.floor(Math.random()*30 + 1) + ".png";
    }
});

function spostaPianeti(btn){
    let j = 0;
    for(let i =0; i<btn.length; i++){
        tempoInit = Date.now();
        btn[i].style.transitionDuration = "0s";
        btn[i].style.left = misure[j];
        btn[i].style.top = misure[j + 1];
        setTimeout(function (){
            btn[i].style.transitionDuration = "2s";
        }, 10, i);
        j += 2;
    }

    tempoInit = -2000;
}


function generaStelle(){
    /*let svg = document.getElementById("spazio");
    svg.innerHTML = "";
    let color = ["white", "orange", "darkgray", "lightblue"]

    for(let i=0; i<300; i++){
        let c = `<circle cx="${Math.floor(Math.random()*99)}%" 
                cy="${Math.floor(Math.random()*99)}%" r="${Math.random()*0.6}%"
                style="fill: ${color[Math.floor(Math.random()*4)]};"/>`
        svg.innerHTML += c;
    }*/ 

    for(let i=0; i<1500; i++){
        ctx.beginPath();    
        ctx.moveTo(250, 100);
        ctx.fillStyle = colori[Math.floor(Math.random()*4)];
        let r = Math.floor(Math.random()*5);
        creaPunto(Math.floor((Math.random()*2000) - r), Math.floor((Math.random()*2000) - r), r);
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.closePath();
    }
}

function creaPunto(x, y, r){
    ctx.arc(x, y, r, 0, 2 * Math.PI);
}

function change(d){
    console.error("deh");
    if(d == 0 && posAttuale - 1 > -1){
        animeIndietro();
    }
    else if(posAttuale + 1 < 3){
        animeAvanti();
    }

    if(posAttuale == 0){
        su.style.display = "none";
        giu.style.display = "block";
    }
    else if(posAttuale == 2){
        su.style.display = "block";
        giu.style.display = "none";
    }else{
        su.style.display = "block";
        giu.style.display = "block";
    }
}

function animeIndietro(){
    if(Date.now() >= tempoInit + 2000){
        btn[posAttuale - 1].style.left = misure[2];
        btn[posAttuale - 1].style.top = misure[3];
        btn[posAttuale].style.left = misure[4];
        btn[posAttuale].style.top = misure[5];
        tempoInit = Date.now();
        console.log(tempoInit);
        posAttuale--;
    }
}

function animeAvanti(){
    if(Date.now() >= tempoInit + 2000){
        btn[posAttuale].style.left = misure[0];
        btn[posAttuale].style.top = misure[1];
        btn[posAttuale + 1].style.left = misure[2];
        btn[posAttuale + 1].style.top = misure[3];
        tempoInit = Date.now();
        posAttuale++;
        console.log(tempoInit);
    }
}

function controllaNome(e, i){
    let input = document.getElementById("nome" + i);

    console.log(e.keyCode);

    if(input.value.length > 10){
        input.value = input.value.substring(0, input.value.length - 1);
    }

    nomi[i-1] = input.value;
}

