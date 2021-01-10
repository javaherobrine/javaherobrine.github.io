function getOnlineJSONSource(url){
	let xml;
	if(window.XMLHttpRequest){
		xml=new XMLHttpRequest();
	}else{
		xml=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.open("GET",url,false);
	xml.send();
	return JSON.parse(xml.responseText);
}