#include <stdio.h>

struct date
{
    int month;
    int day;
    int year;
};
struct emp
{
    char name[10];
    int employee_id;
    struct  date date_joined;
    

};
int main(){
    for (int i=0;i<2;i++){
        printf("Enter IInfo for student %d\n",i+1);
        printf("Name:");
        scanf("(/n)",emp1.name);
        printf("Employee ID:");
        scanf("%d",&emp1.employee_id);
        printf("Age:");
        scanf("%d",&emp1.age);
        printf("Grade:");
        scanf("(/n)",emp1.grade);
        printf(".................\n");

    }

printf("Student Information:\n");
 printf(".................\n");
 for(int i=0;i<2;i++){
 printf("Name:%s\n",emp1[i].name);
 printf("Employee ID:%d\n",emp1[i].employee_id);
 printf("Age:%d\n",emp1[i].age);
 printf("Grade:%s\n",emp1[i].grade);
 printf(".................\n");
 }


    return 0;
}