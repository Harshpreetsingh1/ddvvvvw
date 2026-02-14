#include <stdio.h>

int main() {
    int a= 34;
    int b= 34;
    int *ptr1= &a;
    int *ptr2= &b;
    printf("difference is %u\n", ptr1-ptr2);
    printf("%d\n", ptr1);
    printf("%d\n", ptr2);
    if(ptr1==ptr2)
    printf("The Pointers are pointing to the same memory location");
    else
    printf("The pointers are not pointing to the same  memory ");

    return 0;
}