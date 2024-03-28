// let x= 20
// let y = 30
// let z = x+y
// let d = z*2
// console.log(d)


// let f =130
// let r = f % 10
// let w = r+ f
// console.log(w)

// let a = 20
// let n = 3
// let i = a * n
// console.log(i)

// let o = 100

// let q = o + 10

// let p = o % 10


// let t= o - 10
//  q = 4
//  t = 2
//  p = 7
// let u = q*t*p
// let g = o/u

// console.log(u)
// console.log(g)

// let number = 5;
// let result = (number> 2)? true: false;
// console.log(result);

// let left_operand = 50
// let right_operand = 30
// let operator =  "/"

// if(operator == "+"){
//     console.log(left_operand+ right_operand)

// }else if(operator == "-"){
//     console.log(left_operand -right_operand)
// }else if(operator == "*"){
//     console.log(left_operand *right_operand)
// }else if(operator == "/"){
//     console.log(left_operand /right_operand)
// }

// let ans = console


//using function



// function calc(x){
//     function secondNumber(a){
//         return a*x;
//     }
//     return secondNumber;
// }

// console.log(calc(3)(2));

// const calc = function(x){
//     function secondNumber(a){
//         return a*x;

//     }
//     return secondNumber;
// }
// console.log(calc(3)(2));

// function higherOrderFunction(func){
//     console.log("higher functon")
//     func();
// }

// function lowerOrderFunction(){
//     console.log("lower function")
// }

// higherOrderFunction(lowerOrderFunction);

function greetings(greet){
    return function person(name){
        return `Hello, ${name}.${greet}`;
    }
}

console.log(greetings("Good morning!")("john"))






