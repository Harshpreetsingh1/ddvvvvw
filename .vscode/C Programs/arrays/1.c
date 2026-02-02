#include <stdio.h>



int main() {
    int row, col;
    int arr[row][col]; 

    printf("Enter the number of rows and columns of the matrix: ");
    scanf("%d %d", &row, &col);
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &arr[i][j]); 
        }
    }

    // Print the elements of the array
    printf("The matrix is:\n");
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\n"); 
    }

    return 0;
}