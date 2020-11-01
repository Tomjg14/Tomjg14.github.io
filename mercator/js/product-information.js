window.onload = userVoted()

const backBtn = document.getElementById('back');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

async function getVoted(ean) {
	console.log(ean);
	var voted = [];
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	await productRef.get().then(function(doc) {
		if (doc.exists) {
			voted = doc.data().voted;
		} else {
			console.log("No such document!");
		}
	});
	return voted;
}

function userVoted() {
	let ean = Object.values(getUrlVars())[0];
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user.uid);
			voted = getVoted(ean);
			voted.then(function(x) {
				console.log(x);
				if (x.includes(user.uid)) {
					console.log("user already voted");
				} else {
					console.log("user did not yet vote");
				}
			});
		} else {
			console.log("no user");
		}
	});
}

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

async function updateVotes(ean,sign) {
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			await productRef.get().then(function(doc) {
				if (doc.exists) {
					if (sign == "+") {
						productRef.update({
							positive_reviews: doc.data().positive_reviews + 1,
							voted: firebase.firestore.FieldValue.arrayUnion(user.uid)
						});
					} else {
						productRef.update({
							negative_reviews: doc.data().negative_reviews + 1,
							voted: firebase.firestore.FieldValue.arrayUnion(user.uid)
						});
					}
				} else {
					console.log("No such document!");
				}
			});
		} else {
			console.log("no user");
		}
	});
}

yesBtn.addEventListener("click", e => {
	e.preventDefault();
	let ean = Object.values(getUrlVars())[0];
	updateVotes(ean,"+");
});

noBtn.addEventListener("click", e => {
	e.preventDefault();
	let ean = Object.values(getUrlVars())[0];
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user.uid);
			votes = getVotes(ean,"-");
			votes.then(function(x) {
				productRef.update({
					negative_reviews: x+1,
					voted: firebase.firestore.FieldValue.arrayUnion(user.uid)
				});
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
