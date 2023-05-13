var vetTab1 = [];
var vetTab2 = [];
var puntTot1 = 0;
var puntTot2 = 0;
var tab1;
var tab2;
var colori2 = ["#5858ff", "#9595ff"];
var colori1 = ["#ff5f5f", "#ff8585"];

window.addEventListener("load", function primo(){
    initDati();
    initDatiPunteggio();
    tab1 = document.querySelector("#tab1 > tbody");
    tab2 = document.querySelector("#tab2 > tbody");
    puntTot1 = creaTabella(tab1, vetTab1, colori1);
    puntTot2 = creaTabella(tab2, vetTab2, colori2);
    let podio1 = document.querySelector("#giocatore1 > .base");
    let podio2 = document.querySelector("#giocatore2 > .base");
    this.document.querySelector("#giocatore1 > img").src = "img/skin/amogus" + skin1[scelta1] + ".png";
    this.document.querySelector("#giocatore2 > img").src = "img/skin/amogus" + skin2[scelta2] + ".png";
    if(vincitore == 0){
        podio1.style.height = "50%";
        podio2.style.height = "25%";
    }else{
        podio2.style.height = "50%";
        podio1.style.height = "25%";
    }
    this.document.getElementById("punt1").innerText = puntTot1;
    this.document.getElementById("punt2").innerText = puntTot2;
    let money1 = parseInt(puntTot1/10);
    let money2 = parseInt(puntTot2/10);
    soldi[0] = (parseInt(soldi[0]) + money1).toString();
    soldi[1] = (parseInt(soldi[1]) + money2).toString();
    this.document.getElementById("monete1").innerText = money1;
    this.document.getElementById("monete1").innerHTML += `
        <span class="material-symbols-outlined money">monetization_on</span>
    `;
    this.document.getElementById("monete2").innerText = money2;
    this.document.getElementById("monete2").innerHTML += `
        <span class="material-symbols-outlined money">monetization_on</span>
    `;
});


function creaTabella(tab, vetTab, colori){
    let puntTot = 0;
    let vetAus = [];
    let turno = 0;

    for(let x=0; x<vetTab.length; x++){
        vetAus = vetTab[x].split(";");

        if(vetAus[x] != "null")
        {
            tab.innerHTML += `
            <tr style="background-color: ${colori[turno]}">
                <td>${vetAus[0]}</td>
                <td>${vetAus[1]}</td>
            </tr>
            `;

            puntTot+=parseInt(vetAus[0]);

            (turno == 0 ? turno = 1 : turno = 0);
        }
    }

    return puntTot;
}