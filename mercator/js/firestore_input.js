const form = document.querySelector('form')

form.addEventListener('add', e => {
	e.preventDefault();
	
	const db = firebase.firestore();
	
	const productCollectionRef = db.collection('products');
	
	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("user logged in");
		} else {
			console.log("user not logged in");
		}
	});
});