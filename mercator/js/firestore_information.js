window.onload = getProductInformation();

async function getProductInformation() {
	let ean = Object.values(getUrlVars())[0];
	console.log(ean);
	
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	let title = document.getElementsByTagName('h1')[0];
	let naamCell = document.getElementById("product_naam");
	let eanCell = document.getElementById("ean");
	let fotoImg = document.getElementById("product_foto");
	
	await productRef.get().then(function(doc) {
		if (doc.exists) {
			title.innerHTML = doc.data().product_naam;
			naamCell.innerHTML = doc.data().product_naam;
			eanCell.innerHTML = doc.data().ean;
			fotoImg.src = doc.data().product_foto;
		} else {
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
}