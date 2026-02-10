let calculator={
    sum(){
        return this.a + this.b ;
    },
    multiply(){
        return this.a * this.b;
    }

};


let a = +prompt("first number");
let b = +prompt("second number");
calculator.read();
alert(calculator.sum());
alert(calculator.multiply());