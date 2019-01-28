var myDiv = document.getElementById("text");
function scrolled() {
    
    if (window.pageYOffset < 100) {
        myDiv.style.opacity = 1;
    } else {
        myDiv.style.opacity = 0.3;
    }
}

var elem = document.getElementById("text");
function fadeOut(el){
	if (window.pageYOffset < 50){
	elem.style.transition = "opacity 0.5s linear 0s";
    elem.style.opacity = 0;
    }else{elem.style.transition = "opacity 0.5s linear 0s";
	elem.style.opacity = 1;}
}

	
	

window.addEventListener('scroll', scrolled);
