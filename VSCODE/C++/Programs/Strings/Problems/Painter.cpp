#include <iostream>
#include <vector>
using namespace std;


// There is fence which consists of 
//  wooden blocks with each block having a number written on it represented by an array 
// . The painter is also given two numbers 
//  and 
//  . He is given the task to paint the fence using at most 
//  colors. But there are certain conditions which the painter must follow while painting:

// He has to paint the fence in sequential manner from left to right i.e, first paint the first block then second block and so on without leaving any block not being painted. 
// He will also use colors in sequential manner i.e, first paint with 1st color,then with 2nd color and so on. Note that he can paint any number of blocks sequentially with a single color and a color once used cannot be reused.
// The sum of numbers written on blocks painted with same color must lie between 
//  and 
//  ( both inclusive ).
//     The painter wants to know in how many ways can he paint the fence.Since the answer can be large, find the answer modulo 
// .


const int MOD = 1e9 + 7;



// Brute Force approach
int countWaysToPaint(vector<int>& arr, int L, int R, int K) {
    int N = arr.size();

    // Step 1: Prefix sum
    vector<int> prefix(N + 1, 0);
    for (int i = 0; i < N; ++i)
        prefix[i + 1] = prefix[i] + arr[i];

    // Step 2: DP table: dp[i][k] = ways to paint first i blocks with k colors
    vector<vector<int>> dp(N + 1, vector<int>(K + 1, 0));
    dp[0][0] = 1; // base case

    // Step 3: Fill the DP table
    for (int i = 1; i <= N; ++i) {
        for (int k = 1; k <= K; ++k) {
            for (int j = 0; j < i; ++j) {
                int segSum = prefix[i] - prefix[j];
                if (segSum >= L && segSum <= R) {
                    dp[i][k] = (dp[i][k] + dp[j][k - 1]) % MOD;
                }
            }
        }
    }

    // Step 4: Total ways = sum of dp[N][1 to K]
    int totalWays = 0;
    for (int k = 1; k <= K; ++k)
        totalWays = (totalWays + dp[N][k]) % MOD;

    return totalWays;
}



// Optimised approach
vector<vector<int>> dp(N + 1, vector<int>(K + 1, 0));
dp[0][0] = 1;

for (int k = 1; k <= K; ++k) {
    multiset<int> validDP; // could use sum variable too
    int jStart = 0;

    for (int i = 1; i <= N; ++i) {
        // Remove invalid prefix sums where sum(j..i-1) > R
        while (jStart < i && prefix[i] - prefix[jStart] > R) {
            // Erase dp[jStart][k-1] from the window
            validDP.erase(validDP.find(dp[jStart][k - 1]));
            ++jStart;
        }

        // Expand window: add dp[j][k-1] where sum(j..i-1) >= L
        if (prefix[i] - prefix[jStart] >= L) {
            for (int j = jStart; j < i && prefix[i] - prefix[j] >= L; ++j) {
                validDP.insert(dp[j][k - 1]);
            }
        }

        // Total valid partitions ending at i using k segments
        dp[i][k] = accumulate(validDP.begin(), validDP.end(), 0); // or use mod if needed
    }
}

