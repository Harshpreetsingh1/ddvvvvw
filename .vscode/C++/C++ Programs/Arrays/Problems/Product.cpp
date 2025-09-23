// Question
// Given an array nums of size n, 
// return an array ans such that ans[i] is equal to the product
//  of all the elements of nums except nums[i].
#include <iostream>
#include <vector>
using namespace std;
// Brute Force Approach
vector<int> prod(vector<int>&nums){
    vector<int> ans;
    int n= nums.size();
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i!=j){
               ans[i] *=nums[j];
            }
        }
    }
    return ans;
}

// Optimised Approach(0(n)Time Complexity)
vector<int> product(vector<int>& nums) {
    int n = nums.size();
    vector<int> ans(n, 1);

    int prefix = 1; // Initialize prefix product
    int suffix = 1; // Initialize suffix product
    int left = 0;   // Left pointer
    int right = n - 1; // Right pointer

    while (left <= right) {
        // Multiply prefix into ans[right]
        ans[right] *= prefix;
        // Update prefix
        prefix *= nums[left];

        // Multiply suffix into ans[left]
        ans[left] *= suffix;
        // Update suffix
        suffix *= nums[right];

        // Move pointers
        left++;
        right--;
    }

    return ans;
}
int main() {
    vector<int> nums = {1, 2, 3, 4};
    vector<int> result = product(nums);

    cout << "The resultant array is: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}