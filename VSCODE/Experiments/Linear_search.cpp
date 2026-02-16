#include <iostream>

using namespace std;
int Linearsearch(int arr[],int size,int target){
    int loc=-1;
    for(int i=0;i<size;i++){
        if(arr[i]==target){
            loc=i;
            return loc;
        }
    }
    return loc;
}
int main() {
    int size;
    cout<<"Enter the size of the array: "<<endl;
    cin>>size;
    int arr[size];
    cout<<"Enter the elements in the array: "<<endl;
    for(int i=0;i<size;i++){
        cin>>arr[i];
    }
    cout<<"The Elements are: "<<endl;
    for(int i=0;i<size;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    
    int target;
    cout<<"Enter the element you want to find: ";
    cin>>target;
 int location= Linearsearch(arr,size,target);
 if(location==-1){
    cout<<"Location not found:"<<endl;

 }
 else{
    cout<<"The Element is at the location: "<<location<<endl;
 }


    return 0;
}