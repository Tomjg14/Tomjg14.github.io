// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDtE8lCqpq3nR0cJl-xa42A2LrLv6AaMVA",
	authDomain: "my-jg-streaming-service.firebaseapp.com",
	databaseURL: "https://my-jg-streaming-service.firebaseio.com",
	projectId: "my-jg-streaming-service",
	storageBucket: "my-jg-streaming-service.appspot.com",
	messagingSenderId: "572015816158",
	appId: "1:572015816158:web:ce9c9921c973294aed814f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	
	const db = firebase.firestore();
});