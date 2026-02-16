#include <stdio.h>
void p(int *arr,int n){
    printf("Enter The elements of array : \n");
    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
}for(int j=0;j<n;j++){
    printf("%d",arr[j]);
    printf("\n");
}
}

int main() {
    int arr[5];
    p(arr,5);

    return 0;
}