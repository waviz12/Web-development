let user={
nam:"John",
surname:"Smith"};
user.name="Pete";
delete user.name;
//
let store={};
store.oneproduct=100;
store.secproduct=200;
store.thiproduct=90;
let sum=0;
for(key in store){
 sum+=store[key];
}
alert(sum);
let constructor={
width:200,
height:300,
name:"metall"
}
multnumber(constructor);
function multnumber(constructor){
for(key in constructor){
    if(key=='number'){
        constructor[key]*=2;
    }}

}
