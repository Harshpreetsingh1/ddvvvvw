// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).




// This Question is solved by using binary bits concept
// The binform is the binary form of the variable n
// we have studied this in FOE DE.
// If the modulus of  the variable n by 2= 1 ,
// Then x is multiplied by x .
// Then Bit is shifted by dividing it by 2.
// Then again the process is repeated.
// If the modulus of the variable n by 2=0.
// Then 

class Solution {
    public:
        double myPow(double x, int n) {
            // Convert n to long to handle edge cases like n = INT_MIN
            long binform = n;
            
            // If n is negative, invert x and make binform positive
            if (n < 0) {
                x = 1 / x;
                binform = -binform;
            }
            
            double ans = 1; // Initialize the result to 1
            
            // Loop until binform becomes 0
            while (binform > 0) {
                // If the current bit is 1, multiply ans by x
                if (binform % 2 == 1) {
                    ans *= x;
                }
                // Square x for the next bit
                x *= x;
                // Shift binform to the right by 1 bit
                binform /= 2;
            }
            
            return ans; // Return the final result
        }
};