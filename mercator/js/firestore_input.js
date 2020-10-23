const form = document.querySelector('form')
let fileUpload = document.getElementById('bol_trends')

fileUpload.addEventListener('change', function(evt) {
	let firstFile = evt.target.files[0]
	console.log(firstFile);
 })
form.addEventListener('submit', e => {
	e.preventDefault();
	const db = firebase.firestore();
	
	const productCollectionRef = db.collection('products');
	
	var product_name = document.querySelector("input[id='product_name']").value;
	var bol_link = document.querySelector("input[id='bol_link']").value;
	var gem_verkoopprijs = document.querySelector("input[id='gem_verkoopprijs']").value;
	var bol_trends = document.querySelector("input[id='bol_trends']").value;
	console.log(bol_trends);
	
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("user logged in");
		} else {
			console.log("user not logged in");
		}
	});
});