const reviewRedirectBtn = document.getElementById('reviewRedirect');
const addRedirectBtn = document.getElementById('addRedirect');

reviewRedirectBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-review.html";
});

addRedirectBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-input.html";
});