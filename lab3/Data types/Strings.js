function uppertest(str){
    if(!String) return str;
    return str[0].toUpperCase()  + str.slice(1);

}
alert(uppertest("john"));
function spam(str){
    let novstring=str.toLowerCase();
    return novsting.incudes("viagra") || novstring.incudes("XXX");
}
alert("VUfihef Huefifn VIAgra");
alert("xxxxxxx for free");
function truncate(str,maxleght){
    if(str.length>maxleght){
        return str.slice(0,maxleght-1)+"...";

        
    }
}