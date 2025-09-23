#include <stdio.h>

int main() {
    int size;
    printf("Enter the size of the array: ");
    scanf("%d", &size);
    int arr[size];
    // For Normal array
    for(int i=0; i<size; i++) {
        printf("Enter the element %d: ", i+1);
        scanf("%d", &arr[i]);
    }
    for(int i=0; i<size; i++) {
       printf("%d \n", arr[i]);
    }
    //For Reverse Array
     for(int i=size; i=0; i--) {
       printf("%d \n", arr[i]);
    }
    return 0;
}