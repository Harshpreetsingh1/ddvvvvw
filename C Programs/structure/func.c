#include <stdio.h>
struct employee
{
    int code;
    float salary;
    char name[10];
};
void show(struct employee e){
    printf("The code is %d\n",e.code);
    printf("The salary is %f\n",e.salary);
    printf("The name is %s\n",e.name);
}

int main() {
    struct employee e2;
    e2.code= 334;
    e2.salary= 5000.0;
    strcpy(e2.name,"Harsh");
    show(e2);
    struct employee e3;
    e3.code= 3466646;
    e3.salary= 55544645.56565;
    strcpy(e3.name,"Pahul");
    show(e3);

    return 0;    
}
