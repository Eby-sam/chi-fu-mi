let img1 =document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let divPl = document.getElementById("play1");
let divBot = document.getElementById("play2");
let images = ['ciseau.png','papier.png','pierre.png'];
let image1 = "ciseau.png";
let image2 = "papier.png";
let image3 = "pierre.png";

function ciseau(){
    divPl.style.backgroundImage = "url("+ image1 +")";
    divBot.style.backgroundImage = "url("+ images[Math.floor(Math.random() *images.length)];
}

function papier(){
    divPl.style.backgroundImage = "url("+ image2 +")";
    divBot.style.backgroundImage = "url("+ images[Math.floor(Math.random() *images.length)];
}

function pierre(){
    divPl.style.backgroundImage = "url("+ image3 +")";
    divBot.style.backgroundImage = "url("+ images[Math.floor(Math.random() *images.length)];
}

img1.addEventListener('click',ciseau);
img2.addEventListener('click',papier);
img3.addEventListener('click',pierre);