console.log("hyyy this is working")

var btn = document.getElementById("bn")

function onbtnclick(){
	//alert("TO KNOW ABOUT US...GOTO OUR NEXT PAGE")
	//btn.style.backgroundColor = "blue" ;
	// location.replace("https://www.w3schools.com")
	 window.location.href = "menu.html"
}

btn.addEventListener('click',onbtnclick)