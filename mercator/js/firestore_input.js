const form = document.querySelector('form')
let fileUpload = document.getElementById('bol_trends')

function reqListener() {
	console.log(this.responseText);
}
 
form.addEventListener('submit', e => {
	e.preventDefault();
	const db = firebase.firestore();
	const storage = firebase.storage();
	
	var product_name = document.querySelector("input[id='product_name']").value;
	var ean = document.querySelector("input[id='EAN']").value;
	var product_foto = document.querySelector("input[id='product_foto']").files[0];
	
	const invocation = new XMLHttpRequest();
	const url = `https://api.bol.com/catalog/v4/search/?q=${ean}&offset=0&limit=2&dataoutput=products,categories&apikey=734FF9976B7244708A2AF6293BA47D52&format=json`;
	
	function callOtherDomain() {
		if (invocation) {
			invocation.open('GET', url, true);
			invocation.withCredentials = true;
			invocation.onreadystatechange =  function() {
				if(invocation.readyState === XMLHttpRequest.DONE && invocation.status === 200) console.log(invocation.responseText);
			};
			invocation.send();
		}
	}
	
	callOtherDomain();

	const productCollectionRef = db.collection('mercator-product-review');
	const fotoRef = storage.ref(`product_fotos/${ean}.png`);
	
	var response_message = document.getElementById('response_message')
	
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("user logged in");
			fotoRef.put(product_foto).then(function() {
				console.log("uploaded image");
				fotoRef.getDownloadURL().then(function(url_foto) {
					console.log("add item to firestore");
					productCollectionRef.doc(ean).set({
						product_naam: product_name,
						ean: ean,
						product_foto: url_foto,
						positive_reviews: 0,
						negative_reviews: 0,
						votes: []
					}).catch(function(error) {
						console.error("Error adding item: ", error);
						response_message.innerHTML = "Error adding product";
					}).then(function() {
						console.log("added info");
						response_message.innerHTML = `Product ${ean} has been added`;
					});
				});
			});
		} else {
			console.log("user not logged in");
		}
	});
});