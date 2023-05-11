var sceltaS = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Amongus Battle</title>
        <link rel="stylesheet" href="css/sceltaS.css">
        <link rel="icon" href="img/elementi/icon.png">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="js/store.js"></script>
        <script src="js/dati.js"></script>
        <script src="js/pagine.js"></script>
    </head>

    <body id="sfondo1">
        <div id="imgPoser1"></div>
        <div id="imgPoser2"></div>
        <main>
            <a href="" class="">
                <span class="material-symbols-outlined back">
                    arrow_back_ios
                </span>
            </a>

            <section id="giocatore1">
                <article>
                    <!--<div class="nome1">
                        <input type="text" placeholder="Player 1">
                        <button class="btnNome">Pronto</button>
                    </div>-->
                    <div id="skin1">
                        <div id="imgGiocatore1" style="background-image: url(img/skin/amogus1.png);"></div>
                    </div>
                </article>
            </section>
            <div id="vs">
                <div class="conScritta" style="visibility: hidden;">
                    <span class="vsScritta">
                        VER SUS
                        VER SUS
                    </span>
                </div>
            </div>
            <section id="giocatore2">
                <article>
                    <!--<div class="nome2">
                        <input type="text" placeholder="Player 2">
                        <button class="btnNome">Pronto</button>
                    </div>-->
                    <div id="skin2">
                        <div id="imgGiocatore2" style="background-image: url(img/skin/amogus2.png);"></div>
                    </div>
                </article>
            </section>
        </main>
        <div class="griglia">
            
        </div>	
    </body>

    </html>
`;

var store = `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="css/store.css">
    <link rel="stylesheet" href="css/animation.css">
    <script src="js/store.js"></script>
    <script src="js/dati.js"></script>
    <script src="js/pagine.js"></script>
    <title>Store</title>
</head>
<body>
    <header>
        <span class="material-symbols-outlined back">
            arrow_back_ios
        </span>
        <h1>Store</h1>
    </header>
    <main>
        <div class="container1">
            <div class="s1">
                <h2>SLOT</h2>
                <p id="scritta1"></p>
            </div>
        </div>
        <div class="container2">
            <div class="s2">
                <h2>SKIN</h2>
                <p></p>
                <div id="animeSkin">
                    <img src="img/skin/amogus1.png">
                </div>
            </div>
            <div class="s3">
                <h2>GUNS</h2>
                <p></p>
                <div id="animeWeap">
                    <img src="img/weap/amogus1.png">
                </div>
            </div>
        </div>
    </main>
</body>
</html>
`;