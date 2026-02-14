#include <stdio.h>

int main() {
    float d= 34;
    float *ptr=&d;
    float **pptr=&ptr;
    printf("%f \n",d);
    printf("%f \n",*ptr);
    printf("%f \n",**pptr);


    return 0;
}