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
	
	eanCell.innerHTML = "<strong>Product EAN</strong>";
	nameCell.innerHTML = "<strong>Product Name</strong>";

	let docs = await getDocs();
	
	for(var i = 0; i< docs.length; i++) {
		var rij = table.insertRow(-1);
		eanCell = rij.insertCell(0);
		nameCell = rij.insertCell(1);
		
		eanCell.innerHTML = `<a href='product-information.html?ean=${docs[i].ean}'>${docs[i].ean}</a>`;
		nameCell.innerHTML = docs[i].product_naam;
	}
}