var skin1Prova =[
    1,2 //skin normali //skin rare //skin Leggendarie
];

var skin2Prova = [
    "1,2,3,23,12" //skin normali //skin rare //skin Leggendarie
];

var turno = 1;
var img1;
var img2;

window.addEventListener("load", function init(){
    img1 = document.getElementById("imgGiocatore1");
    img2 = document.getElementById("imgGiocatore2");
    sortSkin(skin1Prova);
    caricaGriglia(skin1Prova);
});

function caricaGriglia(skin, griglia){
    let trovato = false;
    let riga;
    let j=0;

    //sortSkin(skin);
    console.log(skin);

    for(let i=1; i<=30; i++){
        j=0;

        console.log(skin[2]);
        while(skin[j] < i && j < skin.length-1){
            j++;
        }

        if(i < 7){
            riga = document.querySelector("#grDiv1 > .riga1");
            creaCard(skin[j]==i, i, riga);
        }
        else if(i < 13){
            riga = document.querySelector("#grDiv2 > .riga1");
            creaCard(skin[j]==i, i, riga);
        }else if(i < 18){
            riga = document.querySelector("#grDiv1 > .riga2");
            creaCard(skin[j]==i, i, riga);
        }else if(i<23){
            riga = document.querySelector("#grDiv2 > .riga2");
            creaCard(skin[j]==i, i, riga);
        }else if(i<27){
            riga = document.querySelector("#grDiv1 > .riga3");
            creaCard(skin[j]==i, i, riga);
        }else{
            riga = document.querySelector("#grDiv2 > .riga3");
            creaCard(skin[j]==i, i, riga);
        }
        
    }
}

function creaCard(condition, i, riga){
    if(condition){
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

function seleziona(i){
    if(i!=0){
        if(turno == 1){
            img1.style.backgroundImage = "url(img/skin/amogus"+ i.toString() +".png)";
        }else{
            img2.style.backgroundImage = "url(img/skin/amogus"+ i.toString() +".png)";
        }
    }
}

