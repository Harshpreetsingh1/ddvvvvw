#include <stdio.h>
#include<string.h>
struct employee
{
    int code;
    float salary;
    char name[10];/* data */
};
 
int main() {
    // Your code goes here
struct employee e1,e2,e3;
printf("Enter name: \n");
scanf("%s",&e1.name);
printf("enter the salary: \n");
scanf("%f",&e1.salary);
printf("Enter the UID :\n");
scanf("%d",&e1.code);
printf("%s %f %d",e1.name,e1.salary,e1.code);
    return 0;
}