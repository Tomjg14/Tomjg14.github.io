async function getDocs() {
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

	let docs = await getDocIDs();
	
	for(var i = 0; i< docs.length; i++) {
		var rij = table.insertRow(-1);
		eanCell = rij.insertCell(0);
		nameCell = rij.insertCell(1);
		linkCell = rij.insertCell(2);
		reviewCell = rij.insertCell(3);
		
		eanCell.innerHTML = doc.ean;
		nameCell.innerHTML = doc.product_naam;
	}
}