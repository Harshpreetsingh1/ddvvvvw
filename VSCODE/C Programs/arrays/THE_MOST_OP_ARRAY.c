#include <stdio.h>

int main() {
    int row;
printf("Enter the Number of Rows:  ");
scanf("%d",&row);
  
printf("Enter the Number of Columns :  ");
int col;
scanf("%d",&col);  
    int arr[row][col];
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
   printf("Enter the Element %d %d: \n ",i ,j);
            scanf("%d",&arr[i][j]);
        }
    }
      for(int i=0;i<row;i++){
         for(int j=0;j<col;j++){
            printf(" %d ",arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}