const linkSkin = "img/skin/amogus";
const linkWeap = "img/weap/weap";
let container1; 
let container2; 
let img1;
let img2;

var msg1 = [
    "Tenta la fortuna",
    "Secondo me non ce la fai",
    "Ce la puoi fare DAJE"
];

var msg2 = [
    "Cambia Vestito",
    "Che Look!!",
    "Sempre gli stessi stracci..."
];

var msg3 = [
    "Chi vuoi battere con quella?",
    "Equipaggiamoci!!",
    "Clicca qui se sei scarso"
];


window.addEventListener("load", function add(){
    initDati();
    console.log(msg1);
    sugg(".s1", msg1);
    sugg(".s2", msg2);
    sugg(".s3", msg3);
    container1 = document.getElementById("animeSkin"); 
    container2 = document.getElementById("animeWeap"); 
    img1 = document.querySelector("#animeSkin > img");
    img2 = document.querySelector("#animeWeap > img");
    console.log(img1);
    changeskin();
});

var p1;

function sugg(n, vet){
    let cas = Math.floor(Math.random()*3);

    let p1 = document.querySelector(n + " > p");

    p1.innerText = vet[cas];
}

function changeskin(){
    container1.style.right = "-100%";
    container2.style.right = "-100%";

    setTimeout(function cambia(){
        img1.src = linkSkin + (Math.floor(Math.random()*30 +1)).toString() + ".png";
        img2.src = linkWeap + (Math.floor(Math.random()*16 +1)).toString() + ".png";
    }, 350);

    setTimeout(function muovi(){
        container1.style.right = "-30%";
        container2.style.right = "-30%";
    }, 1000);
    
    setTimeout(changeskin, 5000);

}
