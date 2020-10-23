const form = document.querySelector('form')
let fileUpload = document.getElementById('bol_trends')
 
form.addEventListener('submit', e => {
	e.preventDefault();
	const db = firebase.firestore();
	
	const productCollectionRef = db.collection('products');
	
	var product_name = document.querySelector("input[id='product_name']").value;
	var bol_link = document.querySelector("input[id='bol_link']").value;
	var gem_verkoopprijs = document.querySelector("input[id='gem_verkoopprijs']").value;
	var bol_trends = document.querySelector("input[id='bol_trends']").files[0];
	var gem_inkoopprijs = document.querySelector("input[id='gem_inkoopprijs']").value;
	var nr_zoekresultaten = document.querySelector("input[id='nr_zoekresultaten']").value;
	var toelichting = document.querySelector("input[id='toelichting']").value;
	var afmetingen = document.querySelector("input[id='afmetingen']").value;
	var gewicht = document.querySelector("input[id='gewicht']").value;
	
	const productCollectionRef = db.collection('mercator-product-review');
	
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("user logged in");
			productCollectionRef.add({
				product_naam: product_name,
				bol_link: bol_link,
				gem_verkoopprijs: gem_verkoopprijs,
				bol_trends: bol_trends,
				gem_inkoopprijs: gem_inkoopprijs,
				nr_zoekresultaten: nr_zoekresultaten,
				toelichting: toelichting,
				afmetingen: afmetingen,
				gewicht: gewicht
			}).then(function() {
				console.log("added info");
			});
		} else {
			console.log("user not logged in");
		}
	});
});