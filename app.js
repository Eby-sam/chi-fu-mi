let img1 =document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let divPl = document.getElementById("play1");
let divBot = document.getElementById("play2");
let emoji = ["💎", "🌿", "✂️"];
let image1 = "✂️";
let image2 = "🌿";
let image3 = "💎";
let result = document.getElementById('result');
let victory = document.getElementById('vict');
let over = document.getElementById('def');
let execo = document.getElementById('egal');
let vic = 1;
let def = 1;
let ega = 1;

function ciseau(){
    divPl.innerHTML = image1;
    divBot.innerHTML = emoji[Math.floor(Math.random() *emoji.length)];
    for(let i = 0 ; i < 1 ; i++) {
        if(divPl.innerHTML === image1 && divBot.innerHTML === image2) {
            result.innerHTML = ' Vous avez gagné';
            victory.innerHTML = vic++;
        }
        else if (divPl.innerHTML === image1 && divBot.innerHTML === image3){
            result.innerHTML = ' Vous avez perdu';
            over.innerHTML = def++;

        }
        else if (divPl.innerHTML === image1 && divBot.innerHTML === image1){
            result.innerHTML = 'match NUL !!!';
            execo.innerHTML = ega++;
        }
    }
}

function papier(){
    divPl.innerHTML = image2;
    divBot.innerHTML = emoji[Math.floor(Math.random() *emoji.length)];
    for(let i = 0 ; i < 1 ; i++) {
        if(divPl.innerHTML === image2 && divBot.innerHTML === image2) {
            result.innerHTML = 'match NUL';
            execo.innerHTML = ega++;
        }
        else if (divPl.innerHTML === image2 && divBot.innerHTML === image3){
            result.innerHTML = ' Vous avez gagné';
            victory.innerHTML = vic++;
        }
        else if (divPl.innerHTML === image2 && divBot.innerHTML === image1){
            result.innerHTML = ' Vous avez perdu';
            over.innerHTML = def++;
        }
    }
}

function pierre(){
    divPl.innerHTML= image3;
    divBot.innerHTML = emoji[Math.floor(Math.random() *emoji.length)];
    for(let i = 0 ; i < 1 ; i++) {
        if(divPl.innerHTML === image3 && divBot.innerHTML === image2) {
            result.innerHTML = ' Vous avez perdu';
            over.innerHTML = def++;
        }
        else if (divPl.innerHTML === image3 && divBot.innerHTML === image3){
            result.innerHTML = 'match NUL !!!';
            execo.innerHTML = ega++;
        }
        else if (divPl.innerHTML === image3 && divBot.innerHTML === image1){
            result.innerHTML = ' Vous avez gagnée';
            victory.innerHTML = vic++;
        }
    }
}

img1.addEventListener('click',ciseau);
img2.addEventListener('click',papier);
img3.addEventListener('click',pierre);