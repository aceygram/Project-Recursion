#!/usr/bin/env node

let fibonacci = [0, 1];
let fibonaccii = [0, 1];


function fibs(n){
    for (let i = 1; i < n - 1; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    return fibonacci;
}

function fibsRec(n) {
    if(n <= 2){
        return fibonaccii;
    } 
    fibonaccii.push(fibonaccii[fibonaccii.length - 1] + fibonaccii[fibonaccii.length - 2]);
    fibsRec(n-1);
    return fibonaccii;
}

console.log(fibs(20));
console.log(fibsRec(20));