#include <stdio.h>
struct student {
    char subject[20];
    int marks;
          
}   ; 
void mark(struct student s){
    printf("Enter the subject:\n");
    scanf("%s",&s.subject);
    printf("Enter the marks:\n");
    scanf("%d",&s.marks);
       printf("The marks in %s is %d",s.subject,s.marks);
}
int main() {
    struct student s1;
     mark(s1);

    return 0;
}