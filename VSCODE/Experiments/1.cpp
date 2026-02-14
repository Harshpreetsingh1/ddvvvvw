#include <iostream>
// program to find the avg of 5 subject marks ;
using namespace std;
int avgmarks(int sub, int arr[]){
          int sum=0;
          cout<<"Enter subject marks: "<<endl;
        for(int i=0 ; i<sub; i++){
        cin>>arr[i];
        sum+= arr[i];
        }

return sum;
}
int fac(int num){
   int fac=1;
   for(int i=num ; i>=1; i++){
        fac=i*(i-1);
        }
        return fac;
}
int main() {
   //   int arr[5];
   //   int sum=0;
   //   int sub=0;
   //   cout<<"Enter number of subjects: "<<endl;
   //   cin>>sub;
   //   cout<<"Enter Marks of subjects :  "<<endl;
   //   for(int i=0; i<sub; i++){
   //      cin>>arr[i];
   //      sum+= arr[i];
       
   //   cout<<"The avg is :"<<sum/sub<<endl;
   //    cout<<"Your percentage is:  "<< (sum/sub)*100<<"%"<<endl;
       
       int number;
       cout<<"Enter a number  "<<endl;
       cin>>number;
      //  cout<<"Your avg is "<<(avgmarks(sub,arr))/sub<<endl;
      cout<<"The factorial is: "<<fac(number)<<endl;
    return 0;
}