#include <stdio.h>

void vow(char vow[]);

int main() {
    char Str[233];
    printf("Enter a string: ");
    fgets(Str, sizeof(Str), stdin); // Use fgets instead of gets
    vow(Str);
    return 0;
}

void vow(char vow[]) {
    int count = 0;
    for (int i = 0; vow[i] != '\0'; i++) {
        if (vow[i] == 'a' || vow[i] == 'e' || vow[i] == 'i' || vow[i] == 'o' || vow[i] == 'u' || 
            vow[i] == 'A' || vow[i] == 'E' || vow[i] == 'I' || vow[i] == 'O' || vow[i] == 'U') { 
            count++;
        }
    }
    printf("The number of vowels in the string is %d\n", count); // Move printf outside the loop
}