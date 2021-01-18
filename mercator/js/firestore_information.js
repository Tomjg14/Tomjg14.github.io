window.onload = getProductInformation();

async function getProductInformation() {
	let ean = Object.values(getUrlVars())[0];
	console.log(ean);
	
	let productRef = firebase.firestore().collection("mercator-product-review").doc(ean);
	let trackRef = firebase.firestore().collection("mercator-product-tracking").doc(ean).collection("stock");
	
	
	let title = document.getElementsByTagName('h1')[0];
	let naamCell = document.getElementById("product_naam");
	let eanCell = document.getElementById("ean");
	let fotoImg = document.getElementById("product_foto");
	
	var ctx = document.getElementById('product-track-chart').getContext('2d');
	
	await productRef.get().then(function(doc) {
		if (doc.exists) {
			title.innerHTML = doc.data().product_naam;
			naamCell.innerHTML = doc.data().product_naam;
			eanCell.innerHTML = doc.data().ean;
			fotoImg.src = doc.data().product_foto;
		} else {
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
	
	var stock_data = [];
	var dates = [];
	
	await trackRef.get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			var entry = doc.data();
			
			var stock = entry.stock;
			stock_data.push(stock);
			
			var date = doc.id;
			dates.push(date);
		});
	});
	
	var myChart = Chart(ctx, {
		type: 'line',
		data: {
			labels: dates,
			datasets: [{
				label: 'Items',
				data: stock_data,
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			// Container for pan options
			pan: {
				// Boolean to enable panning
				enabled: true,
				
				// Panning directions.
				mode: 'x',
				
				speed: 1
			},
			
			// Container for zoom options
			zoom: {
				// enable zooming
				enabled: true,
				// Zooming directions,
				mode: 'x',
			}
		}
	});
}