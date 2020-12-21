// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBB_9eSej7JKUfgvTVIOmukh27pBst55xI",
    authDomain: "mercator-tracking.firebaseapp.com",
    databaseURL: "https://mercator-tracking.firebaseio.com",
    projectId: "mercator-tracking",
    storageBucket: "mercator-tracking.appspot.com",
    messagingSenderId: "941726195687",
    appId: "1:941726195687:web:6e4aeb3e57e734c41c2742",
    measurementId: "G-NT0WD454TZ"
 };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
		
var database = firebase.database();

document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	
	const db = firebase.firestore();
});
