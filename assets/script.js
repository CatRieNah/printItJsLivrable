const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//addeventlistener
const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", function(){
	//console.log("flèche gauche cliquée")
	clickArrowleft()
})
const arrowRight= document.querySelector(".arrow_right")
arrowRight.addEventListener("click", ()=>{
	//console.log("flèche droite cliquée")
	clickArrowRight()
})

//Ajout bullet points 
const parentDots = document.querySelector(".dots")
for(let i= 0; i < slides.length; i++){
	const dotElement = document.createElement("span")
	dotElement.classList.add("dot")
	if (i===0){
		dotElement.classList.add("dot_selected")
	}
parentDots.appendChild(dotElement)
}

//Modification de slide au clic
// recupération de tous les points
const dotElementAll = document.querySelectorAll(".dot")
let i=0
const bannerImg = document.querySelector(".banner-img")
const bannerTxt =document.querySelector("#banner p")
function clickArrowRight (){
	//Changement de point au suivant
	dotElementAll[i].classList.remove("dot_selected")
	i++
	if(i >= dotElementAll.length){
		i=0
	}
	dotElementAll[i].classList.add("dot_selected")
	//changement de l'image 
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
	//changement de texte
	bannerTxt.innerHTML = `${slides[i].tagLine}`
}
function clickArrowleft (){
	//Changement de point au suivant
	dotElementAll[i].classList.remove("dot_selected")
	i--
	if(i < 0){
		i = dotElementAll.length-1
	}
	dotElementAll[i].classList.add("dot_selected")
	//changement de l'image 
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
	//changement de texte
	bannerTxt.innerHTML = `${slides[i].tagLine}`
}
