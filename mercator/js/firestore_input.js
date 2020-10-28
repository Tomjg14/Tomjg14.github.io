const form = document.querySelector('form')
let fileUpload = document.getElementById('bol_trends')
 
form.addEventListener('submit', e => {
	e.preventDefault();
	const db = firebase.firestore();
	const storage = firebase.storage();
	
	var product_name = document.querySelector("input[id='product_name']").value;
	var ean = document.querySelector("input[id='EAN']").value;
	var bol_link = document.querySelector("input[id='bol_link']").value;
	var gem_verkoopprijs = document.querySelector("input[id='gem_verkoopprijs']").value;
	var gem_inkoopprijs = document.querySelector("input[id='gem_inkoopprijs']").value;
	var nr_zoekresultaten = document.querySelector("input[id='nr_zoekresultaten']").value;
	var zoek_termen = document.querySelector("input[id='zoek_termen']").value;
	var toelichting = document.querySelector("input[id='toelichting']").value;
	var afmetingen = document.querySelector("input[id='afmetingen']").value;
	var gewicht = document.querySelector("input[id='gewicht']").value;
	var bol_trends = document.querySelector("input[id='bol_trends']").files[0];
	var product_foto = document.querySelector("input[id='product_foto']").files[0];
	
	const productCollectionRef = db.collection('mercator-product-review');
	const trendsRef = storage.ref(`trends/${ean}.png`);
	const fotoRef = storage.ref(`product_fotos/${ean}.png`);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("user logged in");
			trendsRef.put(bol_trends).then(function() {
				console.log("uploaded image");
				trendsRef.getDownloadURL().then(function(url_trends) {
					fotoRef.put(product_foto).then(function() {
						console.log("uploaded image");
						fotoRef.getDownloadURL().then(function(url_foto) {
							productCollectionRef.doc(ean).set({
								product_naam: product_name,
								ean: ean,
								bol_link: bol_link,
								gem_verkoopprijs: gem_verkoopprijs,
								gem_inkoopprijs: gem_inkoopprijs,
								nr_zoekresultaten: nr_zoekresultaten,
								zoek_termen: zoek_termen,
								toelichting: toelichting,
								afmetingen: afmetingen,
								gewicht: gewicht,
								bol_trends: url_trends,
								product_foto: url_foto,
								positive_reviews: 0,
								negative_reviews: 0,
								votes: []
							}).then(function() {
							console.log("added info");
							});
						});
					});
				});
			});
		} else {
			console.log("user not logged in");
		}
	});
});