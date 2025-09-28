#include <iostream>
#include <vector>
using namespace std;
vector<int> pairsum(vector<int> nums, int target);
// To return a pair the sum of which is the given target sum
// Brute Form Approach
vector<int> pairsum(vector<int> nums, int target){
    vector<int>ans;
    int n =nums.size();
    for(int i=0;i<4;i++){
    for(int j=i+1;j<n;j++){
          if(nums[i]+nums[j]==target){
            ans.push_back(i);
            ans.push_back(j);
            return ans;
          }
    }
}
return ans;
}



// Optimised Approach
// Use two pointer approach
// an Optimised approache is to  use two pointer approach
// Because the array is already sorted and are in ascending order
// Start two variables from start and end 
// and find their sum 
// Compare them to the target sum-
// There are three possibilities -
// 1 if PSUM>target sum
//   decrement the the end variable for a smaller sum to match the target  Sum 
// 2 if Psum <target sum
//  increment the start  variable for a larger sum to match the target sum
// Its like you have a box of size l
// You want to make a box of same size by adding two boxes of different sizes
// Check the sum of the two boxes
// There are three possibilities 
//If  The sum is greater than the size l
//     In that case.choose a smaller box in replacement of the bigger box out of the two boxes.
// This will make the sum smaller

// If the Sum is less than  the target box size
//  Choose a smaller box in replacement of the smaller box out of the two boxes.
// This will make the Sum larger 

// If the sum is equal 



// 3 if Psum= target sum
// -You got your answer(return your answer in the form of current i and j)


vector<int> ps(vector<int> &nums, int target) {
    vector<int> ans;
    int i = 0, j = nums.size() - 1; // Use nums.size() to determine the end index
    while (i < j) {
        int ps = nums[i] + nums[j];
        if (ps > target) {
            j--;
        } else if (ps < target) {
            i++;
        } else {
            ans.push_back(i);
            ans.push_back(j);
            return ans; // Return immediately when the target is found
        }
    }
    return ans; // Return the ans vector, which will be empty if no pair is found
}


int main() {
//   Pair Sum
// Pair Sum - return pair in sorted array with given target sum as question
//  Target Sum = 9 (given Question)
 vector<int>vec={2,7,11,15};
 int target = 9;
//  ans should be{2,7}
// return target sum 9
    // cout << "Hello, World!" << endl;
//   Brute Force approach- 
//  Find all pairs and compare to the target sum;
vector<int> ans = ps(vec,target);
  cout<<ans[0]<<", "<<ans[1]<<endl;
    return 0;
}