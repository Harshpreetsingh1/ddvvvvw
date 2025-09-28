#include <iostream>
#include <vector>
using namespace std;
#include<algorithm>
// Linear search algo has O(n)complexity
// Binary Search Algo has O(log n)time complixety
// So Binary search algo is a more optimised approach
// Binary search algo can only be applied on sorted arrays
// When arrays are sorted , they are called to follow monotonic or monotonous functions
#include <iostream>
#include <vector>
using namespace std;
// Using iteration 
int iterate(vector<int>& arr, int target) {
    int start = 0;
    int end = arr.size() - 1;

    while (start <= end) {
        int mid = start +(end-start) / 2;
        // This formula is modified to escape overflow condition


        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid+1 ;
        } else {
            end = mid-1 ;
        }//Mid+1 and Mid-1 are used to narrow down the array ignore the current mid element.
         
    }

    return -1; // Target not found
    
}
// Using recursion
int recursion(vector<int>&nums,int target){
    

}
int main() {
    
    
    vector<int> arr = {-1, 0, 3, 4, 5, 9, 12};
    cout<<"The List is : "<<endl;
    for(int i=0;i<7;i++){
        cout<<arr[i]<<" ";
        
    }
    cout<<endl;
    int s;
    cout<<"Enter the Element you want to find: ";
    cin>>s;

    cout << "Element is found at index " << iterate(arr, s);
    return 0;
}
// Mid Element= (start+end)/2
// Compare mid value with the target 
// If the Target>mid value
        // In case of Ascending order
    // Increment the index and ignore past values because they are already smaller
        // In case of descending order
    // decrement the index and ignore next values because they are already smaller
    // And vice versa
