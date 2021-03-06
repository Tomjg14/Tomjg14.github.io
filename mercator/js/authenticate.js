function emailLinkLogin(email) {
	
	var linkSend = false;
	
	var actionCodeSettings = {
		url: 'https://tomjanssengroesbeek.nl/mercator/product-menu.html',
		handleCodeInApp: true
	}
	
	firebase.auth().fetchSignInMethodsForEmail(email)
	.then(function(signInMethods) {
		if (signInMethods.indexOf(firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1) {
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					console.log(user.uid);
					if (!linkSend){
						window.location='https://tomjanssengroesbeek.nl/mercator/product-menu.html?apikey=reauthenticate';
					}
				} else {
					linkSend = true;
					console.log("not logged in");
					firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
					.then(function () {
						window.localStorage.setItem('emailForSignIn', email);
						let messageDiv = document.getElementById('message-block');
						messageDiv.innerHTML = '';
						var messagePar = document.createElement("p");
						messagePar.innerHTML = '<br><strong>Link has been send.</strong>';
						messageDiv.appendChild(messagePar);	
					})
					.catch(function(error) {
						window.alert(error.message);
						console.log(error.code);
					});
				}
			});
		} else {
			window.alert("Email was not verified before. You are redirected to registration.");
			window.location = 'registration.html'; 
		}
	})
	.catch(function(error) {
		let messageDiv = document.getElementById('message-block');
		messageDiv.innerHTML = '';
		var messagePar = document.createElement("p");
		messagePar.innerHTML = '<br><strong>That e-mail address is invalid.<br> Please enter a valid address.</strong>';
		messageDiv.appendChild(messagePar);
	});
	
}