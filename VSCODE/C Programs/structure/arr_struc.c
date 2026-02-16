#include <stdio.h>

struct employee {
    int code;
    float salary;
    char name[10];
};
 
int main() {
    struct employee f[100] = {
        {121, 335535.2, "Harsh"} 
    };

    printf("%d %f %s", f[0].code, f[0].salary, f[0].name); 

    return 0;
}
