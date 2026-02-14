#include <stdio.h>
#include <string.h>

void salt(char password[]);

int main() {
    char password[100];
    printf("Enter your Password: ");
    scanf("%99s", password); // Limit input to 99 characters to prevent overflow
    salt(password);
    return 0;
}

void salt(char password[]) {
    char salt[] = "123";
    char newpass[200]; // Make sure this is large enough to hold the combined string
    strcpy(newpass, password);
    strcat(newpass, salt);
    puts(newpass); // This will print the salted password
}