#include <iostream>

using namespace std;
// Pointers-
// - Special Variables that store address of other variables
// "*"= Dereference Operator- Value at adress
// Null Pointer= A pointer that doesn't point to any location
// Null pointers cannot be derefrenced because they donot point to any specific memory location 


// Pass By reference-
// Pass pointer of a variable to directly access the value at the adress
// Use an alias name

int main() {
    int a=9;
    int *ptr= &a;//initialisation of a pointer
    int **ptr2= &ptr;// Pointer to pointer . Stores adress of another pointer
    int *ptr3= NULL;// initialisation of null pointer
    cout << ptr << endl;//Outputs adress of a
    cout << &ptr << endl;//Outputs Adress of ptr
    cout<<ptr2<<endl;//works same as &ptr
    cout<<*(&a)<<endl;// Dereferenced
    cout<<*(ptr)<<endl;//Dereferenced ptr
      int arr[]={1,2,3,4};
// ARRAY Pointers
// In the initialisation of array the variable used is a pointer referencing to the adress of the first index of the array
      cout<< arr<<endl;
// if the variable is dereferenced , It will print the value at the first index
      cout<<*arr<<endl;
    //   Array pointer is a type of constant pointer
       
       
    // Pointer Arithematic
    // Increment decrement
    // In pointer arithematic , It increments or decrements the value of adress 
    // by one datatype size
    // for example 
    int t=0;
    int *poi=&t;
    poi++;// this increments the adress by 4 bytes
    
       return 0;
}