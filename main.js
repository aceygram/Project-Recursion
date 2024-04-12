// function fibs(n){
//     for (let i = 1; i < n; i++){
//         return fib(n-1) + fib(n-2)
//     }
//     return n - 1
// }


// function fib(n){
//     if (n <= 2){
//         return n - 1
//     } else {
//         return fib(n-1) + fib(n-2)
//     }
// }

// console.log(fibs(8));

let fibonacci = [0, 1]
let fibonaccii = [0, 1]


function fibs(n){
    for (let i = 1; i < n - 1; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    console.log(fibonacci)
}

function fibsRec(n) {
    if(n <= 2){
        return fibonaccii
    } else {
        fibonaccii.push(fibonaccii[fibonaccii.length - 1] + fibonaccii[fibonaccii.length - 2]);
    }
    fibsRec(n-1)
    return fibonaccii
}

fibs(8)
console.log(fibsRec(20))