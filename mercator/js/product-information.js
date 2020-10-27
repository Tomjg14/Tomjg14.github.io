const backBtn = document.getElementById('back');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

yesBtn.addEventListener("click", e => {
	e.preventDefault();
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user.uid);
		} else {
			console.log("no user");
		}
	});
});

noBtn.addEventListener("click", e => {
	e.preventDefault();
	
});

backBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-review.html";
});
