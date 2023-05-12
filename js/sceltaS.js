/*var skin1 =[
    1,2,4,7,23,12,21 //skin normali //skin rare //skin Leggendarie
];

var skin2Prova = [
    1,2,3,23,16 //skin normali //skin rare //skin Leggendarie
];*/

var colori = ["#0f043fd0, #ca0011d0", "#0f043fd0, #000eccd0"];


var turno = 0;
var img1;
var img2;
var vs;
var intervallo;
var windowSizePrec;
var windowSizeAtt;
var griglia;
var pos1;
var pos2;
var btnEstrai;

var skin1;
var skin2;

window.addEventListener("resize", catchRid);

function catchRid(){
    windowSizeAtt = window.innerWidth;
    console.log(windowSizeAtt);
    ridimensiona();
}

function ridimensiona(){
    if(windowSizePrec > 500 && windowSizeAtt <= 500){
        intervallo = null;
        vs[0].style.bottom = "auto";
        vs[0].style.left = "-100%";
        intervallo = setInterval(sposta2, 2000);
        griglia.style.background = "none";
        griglia.innerHTML = `
            <div id="poserGrDiv1" style="background: linear-gradient(to right top, ${colori[turno]})">
                <div id="grDiv1">
                    <span id="nome">${nomi[turno]}</span>
                    <div class="riga1"></div>
                    <div class="riga2"></div>
                    <div class="riga3"></div>
                </div>
                <div class="estract" onclick="estrai()">?</div>
            </div>
            <div id="poserGrDiv2" style="background: linear-gradient(to right top, ${colori[turno]})">
                <div class="estract" onclick="estrai()">?</div>
                <div id="grDiv2">
                    <button id="btnReady" onclick="proonti()">
                        PRONTO
                    </button>
                    <div class="riga1"></div>
                    <div class="riga2"></div>
                    <div class="riga3"></div>
                </div>
            </div>
        `;
        pos1 = document.getElementById("poserGrDiv1");
        pos2 = document.getElementById("poserGrDiv2");
        if(turno == 0){
            caricaGriglia(skin1);
        }else{
            caricaGriglia(skin2);
        }
    }else if(windowSizePrec <= 500 && windowSizeAtt > 500){
        intervallo = null;
        vs[0].style.left = "auto";
        vs[0].style.bottom = "-100%";
        intervallo = setInterval(sposta1, 2000);
        griglia.style.background = "linear-gradient(to right top, " + colori[turno] + ")";
        griglia.innerHTML = `
            <div id="grDiv1">
                <span id="nome">${nomi[turno]}</span>
                <div class="riga1"></div>
                <div class="riga2"></div>
                <div class="riga3"></div>
            </div>
            <div class="estract" onclick="estrai()">?</div>    
            <div id="grDiv2">
                <button id="btnReady" onclick="proonti()">
                    PRONTO
                </button>
                <div class="riga1"></div>
                <div class="riga2"></div>
                <div class="riga3"></div>
            </div>
        `;
        if(turno == 0){
            caricaGriglia(skin1);
        }else{
            caricaGriglia(skin2);
        }
    }

    windowSizePrec = windowSizeAtt;
}

window.addEventListener("load", function init(){
    initDati();
    img1 = document.getElementById("imgGiocatore1");
    img2 = document.getElementById("imgGiocatore2");
    scelta1 = 0;
    scelta2 = 1;
    vs = document.getElementsByClassName("conScritta");
    /*vs[1].style.bottom = "100%";
    vs[2].style.bottom = "100%";*/
    sortSkin(skin1);
    sortSkin(skin2);
    windowSizeAtt = window.innerWidth;
    (windowSizeAtt > 500 ? windowSizePrec = 500 : windowSizePrec = 501);
    griglia = document.querySelector(".griglia");
    ridimensiona();
    btnEstrai = document.getElementsByClassName("estract");
});

function sposta1(){

    vs[0].style.visibility = "visible";
    
    if(vs[0].style.bottom == "0%"){
        vs[0].style.bottom = "100%";
    }else if(vs[0].style.bottom == "100%"){
        vs[0].style.left = "100%";
        vs[0].style.bottom = "-100%";
    }else{
        vs[0].style.left = "0%";
        vs[0].style.bottom = "0%";
    }
    
}

function sposta2(){

    vs[0].style.visibility = "visible";
    
    if(vs[0].style.left == "0%"){
        vs[0].style.left = "100%";
    }else if(vs[0].style.left == "100%"){
        vs[0].style.bottom = "100%";
        vs[0].style.left = "-100%";
    }else{
        vs[0].style.bottom = "0%";
        vs[0].style.left = "0%";
    }
    
}

function caricaGriglia(skin){
    let trovato = false;
    let riga = [
        document.querySelector("#grDiv1 > .riga1"), 
        document.querySelector("#grDiv2 > .riga1"),
        document.querySelector("#grDiv1 > .riga2"),
        document.querySelector("#grDiv2 > .riga2"),
        document.querySelector("#grDiv1 > .riga3"),
        document.querySelector("#grDiv2 > .riga3")
    ];
    let j=0;

    //sortSkin(skin);
    console.log(skin);

    for(let i in riga)
        riga[i].innerHTML = "";

    for(let i=1; i<=30; i++){
        j=0;

        while(skin[j] < i && j < skin.length-1){
            j++;
        }

        if(i < 7){
            creaCard(skin[j]==i, i, riga[0]);
        }else if(i < 13){
            creaCard(skin[j]==i, i, riga[1]);
        }else if(i < 18){
            creaCard(skin[j]==i, i, riga[2]);
        }else if(i<23){
            creaCard(skin[j]==i, i, riga[3]);
        }else if(i<27){
            creaCard(skin[j]==i, i, riga[4]);
        }else{
            creaCard(skin[j]==i, i, riga[5]);
        }
        
    }
}

function creaCard(condition, i, riga){
    if(condition){
        console.log(riga + "capito zeb");
        riga.innerHTML += `
            <div class="itemGriglia" onclick="seleziona(${i})">
                <div class="sfondo${Math.floor((i+9)/10)}"></div>
                <div class="imgCont">
                    <img src="img/skin/amogus${i}.png">
                </div>
            </div>
        `;
    }else{
        riga.innerHTML += `
            <div class="itemGriglia" onclick="seleziona(0)">
                <div class="sfondoB"></div>
                <div class="imgCont">
                    <img src="img/skin/amogus${i}.png" class="disabled">
                    <span class="material-symbols-outlined lock">lock</span>
                </div>
            </div>
        `;
    }
}

function sortSkin(vet){
    let i = -1;
    let aus = "";
    let scambio = false;

    console.log(vet);

    do{
        scambio = false;
        i++;

        console.log("daye");

        for(let j=vet.length - 2; j>=i; j--){
            console.log("daye");
            if(vet[j] > vet[j+1]){
                aus = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aus;
                scambio = true;
            }
            console.log(vet[j] > vet[j+1]);
        }
    }while(scambio && i<vet.length-2);
}

function proonti(){
    if(turno == 0){
        turno ++;
        if(window.innerWidth > 500)
            AnimazioneP1();
        else
            AnimazioneP2();
    }else{
        pag(4);
    }
}

function AnimazioneP1(){
    griglia.style.transform = "translateY(150%)";
    caricaGriglia(skin2);
    setTimeout(function dp(){
        document.getElementById("nome").innerText = nomi[turno];
        griglia.style.background = "linear-gradient(to right top, #0f043fd0, #000eccd0)";
        griglia.style.transform = "translateY(0%)";
    }, 500);
}

function AnimazioneP2(){
    pos1.style.transform = "translateX(150%)";
    pos2.style.transform = "translateX(-150%)";
    caricaGriglia(skin2);
    setTimeout(function dp(){
        document.getElementById("nome").innerText = nomi[turno];
        pos1.style.background = "linear-gradient(to right top, #0f043fd0, #000eccd0)";
        pos2.style.background = "linear-gradient(to left bottom, #0f043fd0, #000eccd0)";
        pos1.style.transform = "translateX(0%)";
        pos2.style.transform = "translateX(0%)";
    }, 500);
}

var estraiInt;

function estrai(){
    for(let i=0; i<btnEstrai.length; i++){
        btnEstrai[i].disabled = true;
        btnEstrai[i].style.background = "gray";
    } 
    
    estraiInt = setInterval(animeEstrai, 500);
}

function animeEstrai(){
    let i;

    if(turno == 0){
        i = skin1[Math.floor(Math.random()*skin1.length)];
    }else{
        i = skin2[Math.floor(Math.random()*skin2.length)];
    }

    let stop = Math.floor(Math.random()*100 + 1);
    console.log(stop);

    seleziona(i);

    if(stop % 10 == 0){
        clearInterval(estraiInt);
        for(let i=0; i<btnEstrai.length; i++){
            btnEstrai[i].disabled = false;
            btnEstrai[i].style.background = "";
        }
    }
}

function seleziona(i){
    if(i!=0){
        if(turno == 0){
            img1.style.backgroundImage = "url(img/skin/amogus"+ i.toString() +".png)";
            scelta1 = trovaPos(i, skin1);
            console.log(skin1);
            console.log(scelta1);
        }else{
            img2.style.backgroundImage = "url(img/skin/amogus"+ i.toString() +".png)";
            scelta2 = trovaPos(i, skin2);
        }
    }
}

