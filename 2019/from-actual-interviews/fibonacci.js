// write a fibonacci function that uses recursion
// write one that does not

function iterativeFibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;
  
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
  
    return b;
}

function recursiveFibonacci(num) {
    if (num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}