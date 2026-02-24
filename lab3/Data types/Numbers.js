let a = +prompt("a?");
let b = +prompt("b?");
alert(a+b);
alert(6.342384.toFixed(3));
function readNum(){
do{
    let num=prompt("some","");
}
while(!isFinite(num));
if(num===0||num=='')return null;
retrun +num;
}
alert(readNum());
function random(max,min){
return min + Math.random()*(max-min);
}
alert(random(1,5));