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
	console.log("flèche gauche cliquée")
})
const arrowRight= document.querySelector(".arrow_right")
arrowRight.addEventListener("click", ()=>{
	console.log("flèche droite cliquée")
})

//Ajout bullet points 
const parentDots = document.querySelector(".dots")
for(let i= 0; i < slides.length; i++){
	const dotElement = document.createElement("span")
	dotElement.classList.add("dot")
	console.log(dotElement)
	if (i===0){
		dotElement.classList.add("dot_selected")
	}
parentDots.appendChild(dotElement)
}