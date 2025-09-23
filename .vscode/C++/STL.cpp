#include <iostream>
#include<vector>
using namespace std;
// STL is of four types:
// Containers,Iterators,Algorithms,Functors

// Vector-Dynamic datatype
int main() {
vector<int> vec;
vector<int> vec1(vec);//Copy array
// insertion  function:
vec.push_back(1);//O(1) time complexity
vec.push_back(2);//Capacity doubles after each insertion
vec.push_back(2);//Capacity doubles after each insertion
// cout<<vec.size()<<endl;
// cout<<vec.capacity()<<endl;
// For accssing data
cout<<
vec.at(1)<<endl;

cout<<endl;
vec.erase(vec.begin());
vec.erase(vec.begin()+1);
vec.erase(start,end);//range of elements to be deleted
// Erase and empty functions only changes the size of the vector not the capacity 
vec.insert(vec.begin()+2,100);

for(int val: vec){
    cout<<val<<" ";
}
vec.clear();//To delete the whole vector
// Vector Iterators
// vec.begin These point to the first index
// vec.begin This point to the next  value of the last index that is garbage value
return 0;
}