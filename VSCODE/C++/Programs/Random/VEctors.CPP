#include <iostream>
#include <vector>
using namespace std;

int main() {
//    The Initialisation of vectors
    // vector<int> vec;// Size is 0, first way
    // vector<int>vec(3,0);// Third way in which first value is the size of vector and second value is The value stored at each index
    // cout<<vec[0]<<endl;
    // for(int i=0;i<3;i++){
    //     cout<<vec[i]<<endl;
    // }
    
    //  Loop for vectors (for each loop)
                // Syntax
    //  for(int i: vec){
    //     cout<< i<< endl;// here i is the value stored at each index
    //  }

    vector<int> vec={1,2,3};// Second way
// Vector Functions

//  Sort function- sorts the array
//  Syntax
// sort(vec.begin(), vec.end());
// Size function- returns the size of the vector
    //  Syntax
// cout<<"size = "<<vec.size()<<endl;

// Push block 
// Adds Element at the last of vector
        //  Syntax
// vec.push_back(25);
// cout<< "After push back  size = "<<vec.size()<<endl;


// Pop Back 
// Deletes the element contained in the last index of vector

    // Syntax
// vec.pop_back();
// for(int i:vec){
//     cout<<i<<endl;
// }
// Remove element at  index i
//  syntax
// vec.erase(v.begin()+i);

// Front - To Print the value at the front index
// Back - To print the value at the last index
// at function- To access value at a particular index
//    Capacity function - To access the capacity of the Vector


    //  Syntax
//  cout<<vec.front()<<endl;
//  cout<<vec.back()<<endl;
//  cout<<vec.at(2)<<endl; // The value to be accessed is written in the closed brackets
// cout<<vec.capacity()<<endl;

//  Single Number
  
 



    return 0;
}