class Solution {
    public:
        int removeDuplicates(vector<int>& nums) {
            
            set<int> uniqueElements(nums.begin(), nums.end());
    
       
            nums.assign(uniqueElements.begin(), uniqueElements.end());
            return uniqueElements.size();
        }
    };
    