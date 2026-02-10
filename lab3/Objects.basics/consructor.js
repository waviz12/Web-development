function Calculator(){
this.read=function(){
    this.a=+prompt("a?");
    thia.b=+prompt("b?");
};
this.sum=function(){
    return this.a + this.b;
};
this.mult=function(){
    return this.a * this.b;
};
}
let calculator = new Calculator();
calculator.read();
alert(calculator.sum);
alert(calculator.mult);
function something(value){
    this.choto=value;
    this.read=function(){
        this.choto+=prompt("how much to add?");
    };
}
let Something= new something(1);
Something.read();
Something.read()
alert(Something.choto);