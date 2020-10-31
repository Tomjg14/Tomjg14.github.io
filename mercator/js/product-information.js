const backBtn = document.getElementById('back');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

async function getVotes(ean,sign) {
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	var votes = 0;
	await productRef.get().then(function(doc) {
		if (doc.exists) {
			if (sign == "+") {
				return doc.positive_reviews;
			} else {
				return doc.negative_reviews;
			}
		} else {
			console.log("No such document!");
		}
	});
	return votes
}

yesBtn.addEventListener("click", e => {
	e.preventDefault();
	let ean = Object.values(getUrlVars())[0];
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user.uid);
			votes = getVotes(ean,"+");
			console.log(votes);
			productRef.update({
				positive_reviews: votes+1
			});
		} else {
			console.log("no user");
		}
	});
});

noBtn.addEventListener("click", e => {
	e.preventDefault();
	let ean = Object.values(getUrlVars())[0];
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user.uid);
			votes = getVotes(ean,"-");
			productRef.update({
				negative_reviews: votes+1
			});
		} else {
			console.log("no user");
		}
	});
});

backBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-review.html";
});
