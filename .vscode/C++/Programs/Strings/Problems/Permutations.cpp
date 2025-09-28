// Question
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.




// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"

// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
// Condition-s1,s2 are in lower case
class Solution {
public:
    bool isFreqSame(int freq1[], int freq2[]) {
        for(int i = 0; i < 26; i++) {
            if(freq1[i] != freq2[i])
                return false;
        }
        return true;
    }

    bool checkInclusion(string s1, string s2) {
        int len1 = s1.length(), len2 = s2.length();
        if(len1 > len2) return false;

        int freq1[26] = {0}, freq2[26] = {0};

        // Count frequency of s1
        for(int i = 0; i < len1; i++) {
            freq1[s1[i] - 'a']++;
            freq2[s2[i] - 'a']++;
        }

        // Check first window
        if(isFreqSame(freq1, freq2)) return true;

        // Slide the window
        for(int i = len1; i < len2; i++) {
            freq2[s2[i] - 'a']++;                 // Add new character
            freq2[s2[i - len1] - 'a']--;          // Remove old character

            if(isFreqSame(freq1, freq2)) return true;
        }

        return false;
    }
};

#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}