var temp=document.getElementById("header");
var temp2=document.createElement("button");
temp2=temp.appendChild(temp2);
temp2.addEventListener("click",function(){
	window.location.href="../index.html";
},true);
temp2.innerHTML="首页";
temp2=document.createElement("button");
temp2.addEventListener("click",function(){
	var v=getCookie("lang");
	if(v==undefined){
		window.location.href=goTo()+"choose.html";
	}else{
		switch(v){
			case "zh-cn":
				window.location.href=goTo()+"zh-cn";
				break;
			case "en-us":
				window.location.href=goTo()+"en-us";
				break;
			default:
				window.location.href=goTo()+"choose.html";
				break;
		}
	}
},true);
temp2=temp.appendChild(temp2);
temp.innerHTML="下载";
function goTo(){
	var strFullPath=window.document.location.href;
	var strPath=window.document.location.pathname;
	var pos=strFullPath.indexOf(strPath);
	return strFullPath.substring(0,pos);
}