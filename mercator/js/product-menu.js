const reviewRedirectBtn = document.getElementById('reviewRedirect');
const addRedirectBtn = document.getElementById('addRedirect');
const signOutBtn = document.getElementById('signOutBtn');

reviewRedirectBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-review.html";
});

addRedirectBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-input.html";
});

signOutBtn.addEventListener("click", e => {
	e.preventDefault();
	
	quitBool = true;
	
	firebase.auth().signOut().then(function() {
		console.log("logging out");
	});
	
});