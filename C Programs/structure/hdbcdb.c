#include <stdio.h>

int fibo(int n);

int fibo(int n) {
    if (n == 1 || n == 2) {
        return 1; // Base case for fibo(1) and fibo(2)
    } else {
        return fibo(n - 1) + fibo(n - 2); // Correct recursive call
    }
}

int main() {
    for (int i = 1; i <= 5; i++) {
        printf(" %d ",  fibo(i)); // Print Fibonacci numbers up to fibo(5)
    }
    printf("\n");
    return 0;
}