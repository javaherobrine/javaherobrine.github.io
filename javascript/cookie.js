function getCookie(name){
 var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)){
        return (arr[2]);
    }else{
         return null;
    }      
}
function setCookie(name,value){
   var expireHours=1145141919810;
   var exdate = new Date();　　　　
   exdate.setTime(exdate.getTime() + expireHours);　　　　
   document.cookie = name + "=" + escape(value) + ((expireHours == null) ? "" : ";expires=" + exdate.toUTCString());
}