
var vetDati = [];

var danno = [
    // danno, imgProiettile
    [2,1],
    [2,1],
    [2,2],
    [2,2],
    [2,3],
    [2,3],
    [2,4],
    [2,4],
    [2,5],
    [2,5],

    [10,6],
    [10,6],
    [10,7],
    [10,7],
    [10,8],
    [10,8],
    [10,9],
    [10,9],
    [10,10],
    [10,10],

    [20,11],
    [20,11],
    [25,12],
    [25,12],
    [25,13],
    [25,13],
    [30,14],
    [30,14],
    [100,15],
    [100,15]
];

//dati gioco generico
var nomi = ["", ""];
var soldi = ["", ""];
var skin1 = [];
var skin2 = [];
var record;

//dati per gioco finale
var scelta1;
var scelta2;

// dati per punteggio
var punteggio1 = [];
var punteggio2 = [];
var punteggioLung1 = 0;
var punteggioLung2 = 0;

// dati pag finale punteggio
var puntTot1 = 0;
var puntTot2 = 0;
var vincitore;

function creaStrPunteggio(puntegg, n){
    let str="null";

    if(n > 0){
        str = "";
        for(let i=0; i<n - 1; i++){
            str += puntegg[i][0].toString() + ";" + puntegg[i][1].toString() + ",";
        }

        str += puntegg[n-1][0].toString() + ";" + puntegg[n-1][1].toString();
    }

    return str;
}


function initDati(){
    console.log("data loading --> success");
    let query = window.location.search;
    query = query.replace("?", "");
    vetDati = query.split("&");
    nomi[0] = vetDati[0];
    nomi[1] = vetDati[1];
    soldi[0] = vetDati[2];
    soldi[1] = vetDati[3];
    skin1 = vetDati[4].split(",");
    skin2 = vetDati[5].split(",");
}

function initDatiGame(){
    scelta1 = parseInt(vetDati[6]);
    scelta2 = parseInt(vetDati[7]);
}

function initDatiPunteggio(){
    vetTab1 = vetDati[6].split(",");
    vetTab2 = vetDati[7].split(",");
    vincitore = vetDati[8];
    scelta1 = vetDati[9];
    scelta2 = vetDati[10];
}

function creaStrSkin(skin){
    let str = "";

    for(let x=0; x<skin.length - 1; x++){
        str += skin[x].toString() + ",";
    }

    str += skin[skin.length-1].toString();

    return str;
}

function apriAmogusPage(pag){
    window.open(pag + "?" + nomi[0] + "&" + nomi[1] + "&" + soldi[0] + "&" + soldi[1] + "&" + creaStrSkin(skin1) + "&" + creaStrSkin(skin2));
}

function apriAmogusPageGame(pag){
    window.open(pag + "?" + nomi[0] + "&" + nomi[1] + "&" + soldi[0] + "&" + soldi[1] + "&" + creaStrSkin(skin1) + "&" + creaStrSkin(skin2) + "&" + scelta1 + "&" + scelta2);
}

function apriAmogusPagePunteggio(pag){
    pagPunteggio = window.open(pag + "?" + nomi[0] + "&" + nomi[1] + "&" + soldi[0] + "&" + soldi[1] + "&" + creaStrSkin(skin1) + "&" + creaStrSkin(skin2) + "&" + creaStrPunteggio(punteggio1, punteggioLung1) + "&" + creaStrPunteggio(punteggio2, punteggioLung2) + "&" + vincitore + "&" + scelta1 + "&" + scelta2);
}

function trovaPos(i, skin){
    let j = 0;

    while(j<skin.length && skin[j] != i)
        j++;

    if(skin[j] != i)
        j = -1;

    return j;
}

function pag(scelta){
    switch(scelta){
        case 0:
                apriAmogusPage("index.html")
            break;
        case 1:
                apriAmogusPage("store.html");
            break;
        case 2:
                apriAmogusPage("sceltaS.html");
            break;
        case 3:
                apriAmogusPage("options.html");
            break;
        case 4:
                apriAmogusPageGame("game.html");
            break;
    }
}