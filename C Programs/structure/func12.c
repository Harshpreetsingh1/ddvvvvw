#include <stdio.h>

void hello(int i) {
    if (i < 5) { 
        printf("Hello\n");
        hello(i + 1); 
    }
}

int main() {
    hello(0); 
    return 0;
}