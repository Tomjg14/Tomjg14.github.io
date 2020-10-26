window.onload = getProductInformation();

async function getProductInformation() {
	let ean = Object.values(getUrlVars())[0];
	console.log(ean);
	
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	
	let title = document.getElementsByTagName('h1')[0];
	let naamCell = document.getElementById("product_naam");
	let eanCell = document.getElementById("ean");
	let linkCell = document.getElementById("bol_link");
	let verkoopprijsCell = document.getElementById("gem_verkoopprijs");
	let inkoopprijsCell = document.getElementById("gem_inkoopprijs");
	let zoekresultatenCell = document.getElementById("zoekresultaten");
	let zoektermenCell = document.getElementById("zoektermen");
	let toelichtingCell = document.getElementById("toelichting");
	let afmetingenCell = document.getElementById("afmetingen");
	let gewichtCell = document.getElementById("gewicht");
	let trendsImg = document.getElementById("bol_trends");
	
	await productRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			console.log(doc.data().product_naam); 
			title.innerHTML = doc.data().product_naam;
			naamCell.innerHTML = doc.data().product_naam;
			eanCell.innerHTML = doc.data().ean;
			linkCell.innerHTML = doc.data().bol_link;
			verkoopprijsCell.innerHTML = doc.data().gem_verkoopprijs;
			inkoopprijsCell.innerHTML = doc.data().gem_inkoopprijs;
			zoekresultatenCell.innerHTML = doc.data().nr_zoekresultaten;
			zoektermenCell.innerHTML = doc.data().zoek_termen;
			toelichtingCell.innerHTML = doc.data().toelichting;
			afmetingenCell.innerHTML = doc.data().afmetingen;
			gewichtCell.innerHTML = doc.data().gewicht;
			trendsImg.src = doc.data().bol_link;
		} else {
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
}