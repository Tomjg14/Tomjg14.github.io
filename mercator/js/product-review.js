async function getDocIDs() {
	const snapshot = await firebase.firestore().collection("mercator-product-review").get()
	return snapshot.docs.map(doc => doc.data());
}

async function getProducts() {
	const db = firebase.firestore();
	let table = document.getElementById("product_table").getElementsByTagName('tbody')[0];
	table.innerHTML = '';
	
	var header = table.insertRow(-1);
	var eanCell = header.insertCell(0);
	var nameCell = header.insertCell(1);
	var linkCell = header.insertCell(2);
	var reviewCell = header.insertCell(3);
	
	eanCell.innerHTML = "Product EAN";
	nameCell.innerHTML = "Product Name";
	linkCell.innerHTML = "Product Information";
	reviewCell.innerHTML = "Reviews";

	let ids = await getDocIDs();
	console.log(ids);
	
	var colRef = db.collection("mercator-product-review");
	
	console.log(colRef.id);
}