class Solution {
    public:
        int peakIndexInMountainArray(vector<int>& A) {
            int st = 1, end = A.size() - 2; // Start from 1 and end at size-2 to avoid out of bounds
            while (st <= end) {
                int mid = st + (end - st) / 2; // Calculate mid
                // Check if mid is the peak
                if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) {
                    return mid; // Found the peak
                }
                // If we are on the increasing slope
                else if (A[mid - 1] < A[mid]) {
                    st = mid + 1; // Move to the right
                }
                // If we are on the decreasing slope
                else {
                    end = mid - 1; // Move to the left
                }
            }
            return -1; // This line should never be reached if the input is guaranteed to be a mountain array
        }
    };