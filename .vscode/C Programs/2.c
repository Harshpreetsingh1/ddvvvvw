#include <stdio.h>

int main() {
    int i, j;
    printf("Enter the number of rows: \n");
    scanf("%d", &i);
    printf("Enter the number of columns: \n");
    scanf("%d", &j);

    // Declare a 2D array
    int arr[i][j];

    // Initialize the array with some values (for example, row index + column index)
    for (int row = 0; row < i; row++) {
        for (int col = 0; col < j; col++) {
            arr[row][col] = row + col; // Example initialization
        }
    }

    // Print the array
    for (int row = 0; row < i; row++) {
        for (int col = 0; col < j; col++) {
            printf("%d ", arr[row][col]);
        }
        printf("\n");
    }

    return 0;
}