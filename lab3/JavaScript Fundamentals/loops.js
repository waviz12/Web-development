let i = 3;

while (i) {
  alert( i-- );
} // thr last will 1 because 0 is falsy
let s = 0;
while (s++ < 5) alert(s); // 1 2 3 4
let d = 0;
while (++d < 5) alert(d); //1 2 3 4 5
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
let w = 0;
while (w < 3) {
  alert( `number ${w}!` );
  w++;
}
let nam ;
do{
    num=prompt("number",0);
    while(num<=100 && num);}