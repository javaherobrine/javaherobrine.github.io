function output(arg1,arg2,arg3){
	var v;
	var v2;
	v="type:"+arg1;
	v2=document.createElement("p");
	v2=document.body.appendChild(v2);
	v2.id="t";
	v2.innerHTML=v;
	v="main-class:"+arg2;
	v2=document.createElement("p");
	v2=document.body.appendChild(v2);
	v2.id="mclass";
	v2.innerHTML=v;
	v="main-method:"+arg3;
	v2=document.createElement("p");
	v2=document.body.appendChild(v2);
	v2.id="mmethod";
	v2.innerHTML=v;
}
function output(doc1,arg1,doc2,arg2,doc3,arg3){
	arg1="type:"+arg1;
	doc1.innerHTML=arg1;
	arg2="main-class:"+arg2;
	doc2.innerHTML=arg2;
	arg3="main-method:"+arg3;
	doc3.innerHTML=arg3;
}