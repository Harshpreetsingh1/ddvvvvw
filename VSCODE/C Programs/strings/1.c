#include <stdio.h>
void pri(char arr[]);
int main() {
    char firs[]="Harsh";
    char secnd[]="Sharma";
    // Your code goes here
pri(firs);
pri(secnd);
    return 0;
}
void pri(char arr[]){
    for (int i=0;arr[i]!='\0';i++){
        printf("%c",arr[i]);
    }
    printf("\n");
}