// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD8S49XZVws_hhOXmd8qZckQ8gk2fFIcsU",
    authDomain: "mercator-product-review.firebaseapp.com",
    databaseURL: "https://mercator-product-review.firebaseio.com",
    projectId: "mercator-product-review",
    storageBucket: "mercator-product-review.appspot.com",
    messagingSenderId: "309746193200",
    appId: "1:309746193200:web:7497b12916fa353712eef5",
    measurementId: "G-SPHLV3BVVE"
 };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
		
var database = firebase.database();

document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	
	const db = firebase.firestore();
});
