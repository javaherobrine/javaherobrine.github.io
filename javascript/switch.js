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