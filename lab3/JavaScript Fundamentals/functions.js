function somecheck(x,y){
if(x==="Danik" && y===19){
    alert("your admin")
}
else{
    alert("no success")
}
}


let name=prompt("name?");
let age=+prompt("age?");
somecheck(name,age);
function min(x,y){
 if(x>y){
    alert(y);
 }
else if (x<y){
    alert(x);
}
else {
    alert("equals")
}
}
let first=+prompt("number 1:");
let second=+prompt("number 2:")
min(first,second);