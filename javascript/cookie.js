function writeLanguage(cookieValue){
	document.cookie="Language="+cookieValue;
}
function readLanguage(){
	var cname="Language=";
	var thisTemp;
	var thisCookie=decodeURIComponent(document.cookie);
	var temp=thisCookie.split(";");
	for(var i=0;i<temp.length;i++){
		thisTemp=temp[i];
		while(thisTemp.charAt(0)==" "){
			thisTemp=thisTemp.substring(1);
		}
		if(c.indexOf(cname)==0){
			return c.substring(name.length,c.length);
		}
	}
	return undefined;
}