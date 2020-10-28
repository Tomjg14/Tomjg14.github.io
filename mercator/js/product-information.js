const backBtn = document.getElementById('back');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

yesBtn.addEventListener("click", e => {
	e.preventDefault();
	let ean = Object.values(getUrlVars())[0];
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user.uid);
			productRef.update({
				positive_reviews:
		} else {
			console.log("no user");
		}
	});
});

noBtn.addEventListener("click", e => {
	e.preventDefault();
	
});

backBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-review.html";
});
