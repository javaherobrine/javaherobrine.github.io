function get(name){
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
	var url=window.location.search.substr(1).match(reg);
	if(url!=undefined){
		return decodeURI(url[2]);
	}else{
		return undefined;
	}
}