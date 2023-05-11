var amogus1;
var amogus2;
var spawn1; 
var spawn2;
var bullet1 = [];
var bullet2 = [];
var m;
var q;
var x1;
var x2;
var y1;
var y2;
var colpiRim1 = 0;
var colpiRim2 = 0;
var tempoInit1 = -1;
var tempoInit2 = -1;
var tTasto1 = -1;
var tTasto2 = -1;
var img1;
var img2;
var puntat1 = 0;
var puntat2 = 0;
var puntatore;
var intPunt1 = null;
var intPunt2 = null;
var vita1 = 100;//variabile per gestire la vita del giocatore 1
var vita2 = 100;//variabile per gestire la vita del giocatore 2

var dannoArma1 = 20;//variavile per gestire il danno che fa l'arma del giocatore 1
var dannoArma2 = 20;//variavile per gestire il danno che fa l'arma del giocatore 2

var moulaga; // barre  della vita
var punteggio1 = 0;
var punteggio2 = 0;

var nome = ["Luca", "Andrea"];

var mq1 = [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0]
];

var mq2 = [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0]
];

var mq1Index = 0;

var mq2Index = 0;



var gioco;

window.addEventListener("load", function genera() {
    puntatore = document.getElementsByClassName("puntatore");
    amogus1 = document.getElementById("amogus1");
    amogus2 = document.getElementById("amogus2");
    spawn1 = document.getElementById("spawn1");
    spawn2 = document.getElementById("spawn2");
    /*btn1 = document.getElementById("btnS1");
    btn2 = document.getElementById("btnS2");
    btn1.disabled = true;
    btn2.disabled = true;*/
    img1 = document.querySelector("#amogus1 > .container > img");
    img2 = document.querySelector("#amogus2 > .container > img");
    
    for(let i=0;i<10;i++){
        bullet1.push(document.createElement("div"));
        bullet2.push(document.createElement("div"));
        bullet1[i].classList.add("bullet1");
        bullet2[i].classList.add("bullet2");
    }

    moulaga = document.getElementsByClassName("moulaga");
    moulaga[0].style.width="100%";
    moulaga[1].style.width="100%";

    sposta(amogus1, coord(5, 30), coord(12,80), spawn1, img1, bullet1);
    sposta(amogus2, coord(60, 85), coord(12,80), spawn2, img2, bullet2);

    gioco = true;

    /*btn1.disabled = false;
    btn2.disabled = false;*/

});


function coord(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

function sposta(pl, x, y, s, img, b){
    console.log(pl);

    pl.style.top = y.toString() + "%";
    pl.style.left = x.toString() + "%";

    for(let i=0;i<b.length;i++){
        b[i].style.top = (y + 3).toString() + "%";
        b[i].style.left = (x + 2).toString() + "%";             
    }
    
    s.classList.toggle("sAnime");
    img.classList.toggle("pAnime");
    pl.style.visibility = "visible";
    img.style.opacity = "1";
}
/*
window.addEventListener("mousedown", function mousedw(e){
    console.log(e);
});*/

/*function spara(p){
    console.log(bullet1.style.top.substring(0, bullet1.style.top.length - 1));
    x1 = parseInt(amogus1.style.left.substring(0, amogus1.style.left.length - 1)) + 2;
    y1 = parseInt(amogus1.style.top.substring(0, amogus1.style.top.length - 1)) + 3; 
    x2 = parseInt(amogus2.style.left.substring(0, amogus2.style.left.length - 1)) + 2;
    y2 = parseInt(amogus2.style.top.substring(0, amogus2.style.top.length - 1)) + 3;

    q = ((y1*x2) - (y2*x1))/(x2 - x1);
    m = (y2 - q)/x2;

    if(p == 1){
        console.log(btn1.disabled);
        BulletAnime1();        
    }
    else{
        BulletAnime2();
    }

} */

function calcolaTrag(x1Agg, y1Agg, x2Agg, y2Agg, p, colpiRim){
    x1 = parseInt(amogus1.style.left.substring(0, amogus1.style.left.length - 1)) + x1Agg;
    y1 = parseInt(amogus1.style.top.substring(0, amogus1.style.top.length - 1)) + y1Agg; 
    x2 = parseInt(amogus2.style.left.substring(0, amogus2.style.left.length - 1)) + x2Agg;
    y2 = parseInt(amogus2.style.top.substring(0, amogus2.style.top.length - 1)) + y2Agg;
    q = ((y1*x2) - (y2*x1))/(x2 - x1);
    m = (y2 - q)/x2;

    if(p == 1){
        mq1[colpiRim][0] = m;
        mq1[colpiRim][1] = q;
    }else{
        mq2[colpiRim][0] = m;
        mq2[colpiRim][1] = q;
    }
}

window.addEventListener("keydown", function controlla(e){

    //console.log(bullet1.style.top.substring(0, bullet1.style.top.length - 1));

    let conB1_1 = document.getElementById("conteB1.1");
    let conB1_2 = document.getElementById("conteB1.2");
    let conB2_1 = document.getElementById("conteB2.1");
    let conB2_2 = document.getElementById("conteB2.2");

    if(gioco){
        switch(e.key){
            case "a":
            case "A":
                if(Date.now() >= tempoInit1+3000 && Date.now() >= tTasto1 + 100){
                    if(intPunt1 == null){
                        intPunt1 = setInterval(animPunt1, 10);
                    }else{
                        clearInterval(intPunt1);
                        intPunt1 = null;
                        tTasto1 = Date.now();
                        let leftP = parseInt(puntatore[0].style.left.substring(0, puntatore[0].style.left.length - 1));
                        if(leftP <= 5 || leftP >= 80){
                            let dir = Math.floor(Math.random()*10);
                            (dir < 5 ? calcolaTrag(4, 3, 4, 100, 1, mq1Index) : calcolaTrag(4, 3, 4, -100, 1, mq1Index));
                            dannoArma1 = 0;
                        }else if((leftP > 5 && leftP <= 35) || (leftP >= 50 && leftP < 80)){
                            calcolaTrag(4, 3, 4, 3, 1, mq1Index);
                            dannoArma1 = 5; 
                        }else{
                            calcolaTrag(4, 3, 4, 3, 1, mq1Index);
                            dannoArma1 = 20;
                        }
                        //animPunt1(puntatore[0], puntat1);
                        if(colpiRim1 < 5)
                            conB1_1.appendChild(bullet1[colpiRim1]);
                        else
                            conB1_2.appendChild(bullet1[colpiRim1]);    

                        //bulletCont = document.getElementsByClassName("bullet1");
                        BulletAnime1(colpiRim1, mq1Index);
                        colpiRim1++;
                        mq1Index++;

                        if(colpiRim1 == 5){
                            mq1Index = 0;
                            conB1_2.innerHTML = "";
                            tempoInit1 = Date.now();
                        }else if(colpiRim1 == 10){
                            colpiRim1 = 0;
                            mq1Index = 0;
                            conB1_1.innerHTML = "";
                            tempoInit1 = Date.now();
                        }
                    }
                }
                break;
            case "l":
            case "L":
                if(Date.now() >= tempoInit2+3000 && Date.now() >= tTasto2 + 100){
                    if(intPunt2 == null){
                        intPunt2 = setInterval(animPunt2, 10);
                    }
                    else{
                        clearInterval(intPunt2);
                        intPunt2 = null;
                        tTasto2 = Date.now();
                        let leftP = parseInt(puntatore[1].style.left.substring(0, puntatore[1].style.left.length - 1));
                        if(leftP <= 5 || leftP >= 80){
                            let dir = Math.floor(Math.random()*10);
                            (dir < 5 ? calcolaTrag(4, 100, 4, 3, 2, mq2Index) : calcolaTrag(4, -100, 4, 3, 2, mq2Index));
                            dannoArma2 = 0;
                        }else if((leftP > 5 && leftP <= 35) || (leftP >= 50 && leftP < 80)){
                            calcolaTrag(4, 3, 4, 3, 2, mq2Index);
                            dannoArma2 = 5; 
                        }else{
                            calcolaTrag(4, 3, 4, 3, 2, mq2Index);
                            dannoArma2 = 20;
                        }

                        if(colpiRim2 < 5)
                            conB2_1.appendChild(bullet2[colpiRim2]);
                        else
                            conB2_2.appendChild(bullet2[colpiRim2]);

                        //bulletCont = document.getElementsByClassName("bullet1");
                        BulletAnime2(colpiRim2, mq2Index);
                        colpiRim2++;
                        mq2Index++;

                        if(colpiRim2 == 5){
                            mq2Index = 0;
                            conB2_2.innerHTML = "";
                            tempoInit2 = Date.now();
                        }else if(colpiRim2 == 10){
                            colpiRim2 = 0;
                            mq2Index = 0;
                            conB2_1.innerHTML = "";
                            tempoInit2 = Date.now();
                        }
                    }
                }
                break;
            default:
                break;        
        }
    }
});

function BulletAnime1(i, j){
    let ferma = Anime1(i, j);
    if(!ferma){
        bullet1[i].style.visibility = "visible";
        setTimeout(BulletAnime1,30, i, j);
    }
    else{
        bullet1[i].style.visibility = "hidden";
        bullet1[i].style.left = x1.toString() + "%";
        bullet1[i].style.top = y1.toString() + "%";
        ferma = false;
    }
}

function BulletAnime2(i, j){
    let ferma = Anime2(i, j);
    if(!ferma){
        bullet2[i].style.visibility = "visible";
        setTimeout(BulletAnime2, 30, i, j);
    }
    else{
        bullet2[i].style.visibility = "hidden";
        bullet2[i].style.left = x2.toString() + "%";
        bullet2[i].style.top = y2.toString() + "%";
        ferma = false;
    }
}

function Anime1(i, j){
    let ferma = false;
    let xb = parseInt(bullet1[i].style.left.substring(0, bullet1[i].style.left.length - 1));
    let yb = parseInt(bullet1[i].style.top.substring(0, bullet1[i].style.top.length - 1));
    if(
    parseInt(bullet1[i].style.left.substring(0, bullet1[i].style.left.length-1)) < 100 && parseInt(bullet1[i].style.top.substring(0, bullet1[i].style.top.length-1)) < 100){

        xb+=2;
        yb = (mq1[j][0]*xb) + mq1[j][1];

        bullet1[i].style.left = xb.toString() + "%";
        bullet1[i].style.top = yb.toString() + "%";

        if(
            bullet1[i].getBoundingClientRect().right >= img2.getBoundingClientRect().left &&
            bullet1[i].getBoundingClientRect().right <= img2.getBoundingClientRect().right &&
            bullet1[i].getBoundingClientRect().top >= img2.getBoundingClientRect().top &&
            bullet1[i].getBoundingClientRect().top <= img2.getBoundingClientRect().bottom
        ){
            bullet1[i].style.left = x1.toString() + "%";
            bullet1[i].style.top = y1.toString() + "%";
            ferma = true;

            /////Richiamo funzione che toglie la vita al giocatore e controlla se è morto
            
            vita2 = togliVita(vita2, dannoArma1, moulaga[1]); 

            if(vita2 <= 0){
                vittoria(0);
            }
        }
    }else{
        ferma = true;
    }

    return ferma;
    
}

function Anime2(i, j){
    let ferma = false;
    let xb = parseInt(bullet2[i].style.left.substring(0, bullet2[i].style.left.length - 1));
    let yb = parseInt(bullet2[i].style.top.substring(0, bullet2[i].style.top.length - 1));
    if(
        parseInt(bullet2[i].style.left.substring(0, bullet2[i].style.left.length-1)) < 100 && parseInt(bullet2[i].style.top.substring(0, bullet2[i].style.top.length-1)) < 100){

        xb-=2;
        yb = (mq2[j][0]*xb) + mq2[j][1];

        bullet2[i].style.left = xb.toString() + "%";
        bullet2[i].style.top = yb.toString() + "%";

        if(
            bullet2[i].getBoundingClientRect().left <= img1.getBoundingClientRect().right &&
            bullet2[i].getBoundingClientRect().left >= img1.getBoundingClientRect().left &&
            bullet2[i].getBoundingClientRect().top >= img1.getBoundingClientRect().top &&
            bullet2[i].getBoundingClientRect().top <= img1.getBoundingClientRect().bottom
        ){
            bullet2[i].style.left = x2.toString() + "%";
            bullet2[i].style.top = y2.toString() + "%";
            ferma = true;

            /////Richiamo funzione che toglie la vita al giocatore e controlla se è morto
            vita1 = togliVita(vita1, dannoArma2, moulaga[0]); 

            if(vita1 <= 0){
                vittoria(1);
            }
        }
    }else{
        ferma = true;
    }

    return ferma;
}

//VITA 
function togliVita(vita, danno, moul){
    let seiMorto = false;

    vita -= danno;

    moul.style.width=vita+"%";

    return vita;
}
/*
var tPunt1;
var tPunt2;*/

var direction1 = 5;
var direction2 = 5  ;

function animPunt1(){

    puntat1+=direction1;

    if(puntat1 >= 115)
        direction1 *= -1;
    else if(puntat1 <= -30)
        direction1 *= -1;

    puntatore[0].style.left = puntat1 + "%";

}

function animPunt2(){

    puntat2+=direction2;

    if(puntat2 >= 115)
        direction2 *= -1;
    else if(puntat2 <= -30)
        direction2 *= -1;

    puntatore[1].style.left = puntat2 + "%";

}

function vittoria(p){
    gioco = false;
    let title = document.getElementById("pWin");

    let cont = document.getElementsByClassName("vittoria");
    cont[0].style.display = "flex";
    cont[0].classList.toggle("animtitolo");

    title.innerHTML = `il Vincitore è <strong style="color: purple">${nome[p]}</strong>`;
}