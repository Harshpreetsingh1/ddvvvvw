// Menu Driven Program for Selection,BUbble,Insertion

#include <iostream>

using namespace std;
void selectionsort(int arr[],int n){// Compares One Element to the whole array before going to the next element
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                swap(arr[i],arr[j]);
            }
        }
    }
}

void bubblesort(int arr[],int n){//Compares Adjacent Elements 
    for(int i=0;i<n-1;i++){
        for(int j=0;(j<(n-1-i));j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }   
}
void insertionsort(int arr[],int n){
    for(int i=1;i<n;i++){
       int target=arr[i];
        int j=i-1;
        while(target<=arr[j]&&j>=0){ //Loop Continues till the element finds its place
            arr[j+1]=arr[j];
            j--;}
            a[j+1]=target;//Updates the positions outside the loop
        }
    }

void display(int arr[],int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
int main() {
   
    return 0;
}