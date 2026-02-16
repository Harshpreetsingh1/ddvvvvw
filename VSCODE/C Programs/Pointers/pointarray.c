#include <stdio.h>

int main() {
    int arr[5];
    int *ptr = arr;
    
    printf("Enter The Elements of array: ");
    for(int i = 0; i < 5; i++) {
        scanf("%d", ptr); // Use ptr to store the value directly
        ptr++; // Move the pointer to the next element
    }

    ptr = arr; // Reset ptr to the start of the array for printing
    for(int i = 0; i < 5; i++) {
        printf("%d  ", *ptr); 
        ptr++;
    }
    
    return 0;
}