window.onload = checkLogin;
var quitBool = false;

function checkLogin() {
	var auth = firebase.auth()
	auth.onAuthStateChanged(user => {
		if (quitBool) {
			window.location = "index.html";
		}
	});
}