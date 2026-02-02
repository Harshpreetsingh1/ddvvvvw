#include <stdio.h>
#include <stdlib.h>
int main() {
    int *ptr;
    int n, reallocSize, mallocSize;
    printf("Enter the size for malloc: \n");
    scanf("%d", &mallocSize);
    ptr = (int *)malloc(mallocSize * sizeof(int));
    printf("Enter numbers (%d): \n", mallocSize);
    for(int i = 0; i < mallocSize; i++) {
    scanf("%d", &ptr[i]);
    }
    printf("Using Malloc: \n");
    for(int i = 0; i < mallocSize; i++) {
    printf("%d \n", ptr[i]);
    }
    printf("Enter the size for calloc: \n");
    scanf("%d", &n);
    ptr = (int *)calloc(n, sizeof(int));
    printf("Using Calloc: \n");
    for(int i = 0; i < n; i++) {
    printf("%d\n", ptr[i]);
    } 
    free(ptr);
    printf("The memory has been freed \n");
    printf("Enter the new size for calloc: \n");
    int newSize;
    scanf("%d", &newSize);
    ptr = (int *)calloc(newSize, sizeof(int));
    printf("The New Memory is: \n");
    for(int i = 0; i < newSize; i++) {
    printf("%d\n", ptr[i]);
    }
    printf("Enter the size for realloc: \n");
    scanf("%d", &reallocSize);
    ptr = realloc(ptr, reallocSize * sizeof(int));
    printf("Enter Numbers (%d): \n", reallocSize);
    for(int i = 0; i < reallocSize; i++) {
    scanf("%d", &ptr[i]);
    }
    printf("Using Realloc: \n");
    for(int i = 0; i < reallocSize; i++) {
    printf("%d \n", ptr[i]);
    }
    free(ptr);
    printf("The memory has been freed \n");
    return 0;
}