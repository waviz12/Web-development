let array=["Jack","John"];
array.push("some word");
array[(Math.floor(array.length)-1)/2]="other world";
array.shift();
array.unshift("first","second");
function input(){
    let arr=[];
    while(true){
        let value=+prompt("number");
    
if (value === "" || value === null || !isFinite(value)) break;
arr.push(value);


}
let sum=0;
for(let number of arr){
    sum+=number;
}
alert(sum);
}
input();



//


function MaxOfsumsequnceValueinArray(array){
    let Maxsum=0;
    let partialsum=0;
    for(let number of array){
        partialsum+=number;
        Maxsum=Math.max(Maxsum,partialsum);
        if (partialSum < 0) partialSum = 0;

    }
return Maxsum;

}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

function camelize(str){
    return str
    .split("-")
    .map(
        (word,index)=>index == 0 ? word:word[0].toUpperCase()+word.slice(1);
    )
    .join('');
}
//
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
//
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );
//
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );
//function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };


