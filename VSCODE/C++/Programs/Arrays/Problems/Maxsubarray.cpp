// Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.


class Solution {
    public:
        int maxSubArray(vector<int>& nums) {
            int currsum=0, maxsum = INT_MIN;
            for(int val : nums){
                currsum+= val;
                maxsum = max( currsum, maxsum);
            if(currsum<0){
                currsum=0;
            }
            }
            return maxsum;
        }
    };
    // Your code implements Kadane's Algorithm to find the maximum subarray sum.
    //  It maintains a running sum (currsum) and updates the maximum sum (maxsum).
    //  For each element, it adds the element to currsum and updates maxsum if currsum is greater.
    //  If currsum becomes negative, it resets to zero.
    //  The final maxsum is the largest subarray sum.