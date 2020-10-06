window.onload = checkLogin;
function checkLogin() {
	var auth = firebase.auth()
	auth.onAuthStateChanged(user => {
		if (quitBool) {
			window.location = "index.html";
		}
	});
}