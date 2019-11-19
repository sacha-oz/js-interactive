// Fonctionnalité numéro 1


var footer = document.getElementsByTagName("footer")[0];
let i = 0;
footer.addEventListener("click",function (){console.log("clique numéro " + i);i++});



// Fonctionnalité numéro 2


var navBarHeader = document.getElementById("navbarHeader");
var hamburgerButton = document.querySelector(".navbar-toggler");

hamburgerButton.addEventListener("click",function (){navBarHeader.classList.toggle("collapse")});


// Fonctionnalité numéro 3

var editButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];


var cardText = document.getElementsByClassName("card-text")[0];

editButton.addEventListener("click",function(){cardText.style.color="red"});

// Fonctionnalité numéro 4 

var editButtonSecond = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

var cardTextSecond = document.getElementsByClassName("card-text")[1];

editButtonSecond.addEventListener("click",function(){
	if (cardTextSecond.style.color === 'green'){
		cardTextSecond.style.color = '' ;
	}else
		cardTextSecond.style.color="green"});


// Fonctionnalité numéro 5 


var navBar = document.getElementsByClassName("navbar")[0];

navBar.addEventListener("dblclick",function(){
	if (document.styleSheets[0].disabled = false){
		document.styleSheets[0].disabled = true ;
	}else
		document.styleSheets[0].disabled = true});


// Fonctionnalité numéro 6 

var allCardsButton = document.getElementsByClassName("btn btn-sm btn-success");
var allCardsText = document.getElementsByClassName("card-text");
var allCardsImg = document.getElementsByClassName("card-img-top");


for (let i = 0; i < allCardsButton.length; i++) {
	allCardsButton[i].addEventListener("mouseover",function(){
  if (allCardsImg[i].style.width != "20%") {
    allCardsImg[i].style.width = "20%"
    allCardsText[i].hidden = true
  } else {
    allCardsImg[i].style.width = "100%";
    allCardsText[i].hidden = false;
  }});
};


// Fonctionnalité numéro 7 

var arrow = document.querySelector("p > a.btn-secondary");
var block = document.querySelectorAll("div.container > div.row")[1];

arrow.addEventListener('click', function(){
	var cards = document.querySelectorAll("div.col-md-4");
    block.insertBefore(cards[cards.length - 1], cards[0]);
});


