const signOutBtn = document.getElementById('signOutBtn');

signOutBtn.addEventListener("click", e => {
	e.preventDefault();
	
	quitBool = true;
	
	firebase.auth().signOut().then(function() {
		console.log("logging out");
	});
	
});
