#include <stdio.h>
struct employee
{
    int code;
    float salary;
    char name[10];/* data */
};
int main() {
    // Your code goes here
struct employee e1;
e1.code= 334;
e1.salary= 5000.0;
strcpy(e1.name,"Harsh");
 struct employee*ptr;
 ptr = &e1;
 printf("%f",(*ptr).salary);
   printf("%s",ptr->name);
   printf("%d",(*ptr).code);
    return 0;
}