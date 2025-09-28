#include <iostream>
#include<vector>
using namespace std;
 int maxSubArray(vector<int>& nums);

int main() {
    // Maximum Subarray print
    int n = 4 ;
    int arr[4]={1, 2, 3, 4};
    maxSubArray(arr[]);
    // for (int st = 0; st < n; st++) {
    //     for (int end = st; end < n; end++) { // Change 'n' to 'end'
    //         for (int i = st; i <= end; i++) {
    //             cout << arr[i] ;
    //         }
    //         cout<<" ";

    //     }
    //         cout << endl; // Add a newline after each subarray
    // }
    
    // Maximum Subarray sum
    // brute force approach- Find every subarray sum and then compare to find the max
    //  int maxsm=0;

    // for(int st=0;st<=n;st++){
    //         int currs=0;
    //     for(int end=st;end<n;end++){
    //         currs+=arr[end];
    //         maxsm= max(currs,maxsm);

    //     }
// }
    // cout<<"Max Subarray Sum = "<< maxsm<<endl;

            // Kadane's Algorithm to solve Maxsubarray Sum
            // Its the most optimised in which negative sum is reset to zero
   
     return 0;
}

    int maxSubArray(vector<int>& nums) {
        int currsum=0, maxsum = 0;
        for(int val : nums){
            currsum+= val;
            maxsum = max( currsum, maxsum);
        if(currsum<0){
            currsum=0;
        }
        }
        return maxsum;
    }
