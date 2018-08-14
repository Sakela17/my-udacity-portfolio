



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.querySelector(".scroll-top").style.display = "block";
		const el = document.querySelector(".scroll-top");
		el.addEventListener("click", topFunction, false);

	} else {
		document.querySelector(".scroll-top").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}




// add event listener to table
