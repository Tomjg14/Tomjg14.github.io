const backBtn = document.getElementById('back');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

yesBtn.addEventListener("click", e => {
	e.preventDefault();
	
	var auth = firebase.auth()
	auth.onAuthStateChanged(user => {
		if (user) {
			console.log(user.id);
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
