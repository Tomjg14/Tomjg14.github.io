const form = document.querySelector('form')

form.addEventListener('submit', e => {
	e.preventDefault();
	console.log("hello");
	const db = firebase.firestore();
	
	const productCollectionRef = db.collection('products');
	
	var product_name = document.querySelector("input[id='product_name']")
	
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("user logged in");
		} else {
			console.log("user not logged in");
		}
	});
});