#include <stdio.h>
struct pg {
    char name[100];
    int age;
    char gender[34];
    char address[100];

};
void show(struct pg p){
    printf("Enter you name,age,gender,address:\n" );
    scanf("%s %d %s %s",&p.name,&p.age,&p.gender,&p.address);
    printf("Your name is %s\n",p.name);
    printf("Your age is %d\n",p.age);
    printf("Your gender is %s\n",p.gender);
    printf("Your address is %s\n",p.address);
}
int main() {
    struct pg e1;
    show(e1);

    return 0;
}