// Question-Given an array nums of size n, return the majority element.
// The majority element is the
//  element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

class Solution {
    public:
        int majorityElement(vector<int>& nums) {
            int freq = 0, ans = 0;
            for (int i = 0; i < nums.size(); i++) {
                if (freq == 0) {
                    ans = nums[i];
                }
                if (ans == nums[i]) {
                    freq++;
                } else {
                    freq--;
                }
            }
            return ans;
        }
    };
// Your code implements the Boyer-Moore Voting Algorithm to find the majority element. 
// It maintains a candidate (ans) and a frequency counter (freq). 
// When freq is zero, it updates the candidate. 
// It increments freq if the current element matches the candidate,
//  otherwise decrements it.
//  The candidate at the end is the majority element.
    