#include <iostream>

using namespace std;

int main() {
int min=0;
int max=0;
int arr[5]={1,2,3,4};
for(int i=0;i<5;i++){
    for(int j=0;j<5;j++){
    if(arr[i]<arr[j]){
    min=arr[i];
    else 
    max=arr[i];
}
}

}    
cout<<min;
cout<<max;
    return 0;
}