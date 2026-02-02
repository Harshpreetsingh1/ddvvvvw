#include <stdio.h>

void fibo(int arr[], int i) {
    arr[0] = 0;
    arr[1] = 1;

    for (int n = 2; n < i; n++) {
        arr[n] = arr[n-1] + arr[n-2];
    }

    // Print the Fibonacci numbers
    for (int n = 0; n < i; n++) {
        printf("%d ", arr[n]);
    }
}

int main() {
    int arr[5]; // Declare an array of size 5
    fibo(arr, 5); // Call the function to fill the array and print Fibonacci numbers
    return 0;
}