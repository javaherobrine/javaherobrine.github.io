function output(){
	var v="type:"+document.getElementById("type").value;
	var v2;
	v2=document.createElement("p");
	document.body.appendChild(v2);
	v2.innerHTML=v;
	v="main-class:"+document.getElementById("class").value;
	v2=document.createElement("p");
	document.body.appendChild(v2);
	v2.innerHTML=v;
	v="main-method:"+document.getElementById("method").value;
	v2=document.createElement("p");
	document.body.appendChild(v2);
	v2.innerHTML=v;
}