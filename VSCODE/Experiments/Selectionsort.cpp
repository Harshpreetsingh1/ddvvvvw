#include <iostream>

using namespace std;
void swap(int *a,int *b){
    int *temp;
    temp=a;
    a=b;
    b=temp;
}
void selectionsort(int arr[],int n){// Compares One Element to the whole array before going to the next element
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                swap(arr[i],arr[j]);
            }
        }
    }
}
void bubblesort(int arr[],int n){//Compares one element with the adjacent Element and then Swaps it.
    for(int i=0;i<n-1;i++){
        for(int j=0;(j<(n-1-i));j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
}
void insertionsort(int arr[],int n){//Replace the shorest element of the sorted part with the 

}
void print(int arr[],int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
int main() {
    int arr[5]={4,8,10,1,3 };
    // selectionsort(arr,5);
    bubblesort(arr,5);
    print(arr,5);
    return 0;
}