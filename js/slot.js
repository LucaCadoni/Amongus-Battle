window.addEventListener("load", imposta);

const link = "img/skin/amogus";
let y1 = -200;
let y2 = -100;
let y3 = 0;
let vetImg = [];
let img1;
let img2;
let img3;
let space1;
let space2;
let space3;
let pos = 1; // cont uguale a 1 perché il primo lo metto in imposta

/**
 * SLOT MACHINE
 * 
 * logica  -->  ci sono 3 div solt1 - slot2 - slot3
 *              si muovono uno dopo l'altro e quando
 *              arrivano a un top di 100% ricominciano
 *              da init che dipende dalla velocità della
 *              slot (199 se avanza di 1% 195 se avanza di 5%)             
 */

function imposta(){

    /**
     * imposto i parametri per l'inizializzazione della ruota
     */
    img1 = document.getElementById("imgSlot1");
    img2 = document.getElementById("imgSlot2");
    img3 = document.getElementById("imgSlot3");
    space1 = document.getElementById("space1");
    space2 = document.getElementById("space2");
    space3 = document.getElementById("space3");
    caricaVetImg();
    img3.src = vetImg[0];
    time();
}

function caricaVetImg(){
    let stop;
    let cas;

    /**
     * per rendere le probabilità valide in base alla
     * potenza del personaggio estraggo un numero casale
     * poi se:
     * 
     * %15 == 0 --> estraggo un personaggio epico
     * 
     * %8 == 0 --> estraggo un personaggio raro
     * 
     * else --> estraggo un personaggio normale
     * 
     * infine metto quindi il valore nei vettori fino a quando non ricevo dallo stop un 100 o un 1
     * che mi diranno che l'ultimo valore estratto è quello che l'utente vincerà
     */

    do{
        cas = Math.floor(Math.random()*100)+1;
        //console.warn(cas);

        if(cas%15 == 0){
            vetImg.push(link + (prendiCarta(21, 30)).toString() + ".png");
        }
        else if(cas%8 == 0){
            vetImg.push(link + (prendiCarta(11, 20)).toString() + ".png");
        }
        else{
            vetImg.push(link + (prendiCarta(1, 10)).toString() + ".png");
        }

        stop = Math.floor(Math.random()*100)+1;
        console.log(stop);
    }while(/*stop != 100 && stop != 1 && stop != 50*/stop%12 != 0 || vetImg.length < 4);

    console.log(vetImg);
}

function prendiCarta(min, max){

    do{
        caSel = Math.floor(Math.random()*max)+1;
    }while(caSel < min);

    return caSel;
}

// fine inizializzazione--------------------------------------------------------------------------------------------

// funzioni per l'animazione

function time(){
    if(pos < vetImg.length - 1){
        animazione(5, -195);
        setTimeout(time, 10);
    }else if(pos <= vetImg.length){
        animazione(1, -199);
        setTimeout(time, 10);
    }

    //nel time ripeto l'animazione con framerate diversi a seconda se sono vicino alla fine

}

function animazione(add, init){

    /**
     * ANIMAZIONE
     * 
     * pre realizzare la logica pensata all'inizio ho utilizzato il parametro TOP
     * per far spostare i vari slot.
     * 
     * Inizialmente l'ordine è slot1 slot2 slot3 e ogni volta che uno slot arriva al top 0%
     * (quindi è nella parte visibile) assegna l'immagine al suo precedente che sarà il successivo
     * a comparire.
     * 
     * quindi slot3 che è il rpimo metterà le immagini allo slot2 e ques'ultimo lo farà allo slot1
     * 
     * 
     * se arrivato al fondo ogni slot riparte da init altrimenti si incrementa di add  
     * 
     * OSS.
     * 
     * Attenzione il controllo per l'indice pos è necessario perchè quando pos arriva all'ultimo elemento,
     * nella parte visibile è ancora presente il penultimo elemento del vettore dunque è necessario fare ancora
     * un giro per arrivare graficamente all'ultimo elemento però senza assegnare valori del vetore di indice pos,
     * in quanto ormai è uscito dalla matrice
     * 
     * inoltre all'ultimo giro per evitare che il div sopra all'ultimo si sovrapponga incremento la sua y
     * solo con la condizione dell'else. mettendole con la or gli permetto di muoversi anche quando gli 
     * altri sono a 0 ma quando pos arriva alla fine allora posso muovermi solo se gli altri non sono a 0
     */



    if(y1 == 0){
        if(pos < vetImg.length){
            y1+=add;
            img3.src = vetImg[pos];
            console.log(vetImg[pos]);
        }
        pos++;
    }else if(y1 == 100){
        y1 = init;
    }else{
        if(pos < vetImg.length || y2 !=0)
            y1 +=add;
    }

    if(y2 == 0){
        if(pos < vetImg.length){
            y2+=add;
            img1.src = vetImg[pos];
            console.log(vetImg[pos]);
        }
        pos++;
    }else if(y2 == 100){
        y2 = init;
    }else{
        if(pos < vetImg.length || y3 != 0)
            y2 +=add;
    }

    if(y3 == 0){
        if(pos < vetImg.length){
            y3+=add;
            img2.src = vetImg[pos];
            console.log(vetImg[pos]);
        }
        pos++;
    }else if(y3 == 100){
        y3 = init;
    }else{
        if(pos < vetImg.length || y1 !=0)
            y3+=add;
    }

    space1.style.top = y1 + "%"
    space2.style.top = y2 + "%"
    space3.style.top = y3 + "%"
}
