#include <stdio.h>

int factorial(int x);

int main() {
    /* testing code */
    printf("1! = %i\n", factorial(1));
    printf("3! = %i\n", factorial(3));
    printf("5! = %i\n", factorial(5));
}

/* define your function here (don't forget to declare it) */
int factorial(int x) {
    if (x <= 1) {
    	return 1;
    }
    else {
    	return x * factorial(x-1);
    }
}
