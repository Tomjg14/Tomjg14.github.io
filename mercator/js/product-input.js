const backBtn = document.getElementById('back');
const addBtn = document.getElementById('add');

backBtn.addEventListener("click", e =>{
	e.preventDefault();
	
	window.location="product-menu.html";
});

addBtn.addEventListener("click", e => {
	var doc = document.implementation.createHTMLDocument();
	doc.body.append("Hello World!");
	var iframeDoc = document.querySelector('iframe').contentDocument;
	iframeDoc.replaceChild(
	doc.documentElement,
	iframeDoc.documentElement);
});
