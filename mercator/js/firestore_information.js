window.onload = getProductInformation();

function getProductInformation() {
	let ean = Object.values(getUrlVars())[0];
	console.log(ean);
	
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	let title = document.getElementsByTagName('h1')[0];
	
	productRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			title.innerHTML = doc.product_name;
		} else {
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
}