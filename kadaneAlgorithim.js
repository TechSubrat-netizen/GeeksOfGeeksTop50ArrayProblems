// Given an integer array arr[]. You need to find and return the maximum sum possible from all the subarrays.

// Examples:

// Input: arr[] = [1, 2, 3, -2, 5]
// Output: 9
// Explanation: Max subarray sum is 9 of elements (1, 2, 3, -2, 5).
// Input: arr[] = [-1, -2, -3, -4]
// Output: -1
// Explanation: Max subarray sum is -1 of element (-1).
// Input: arr[] = [5, 4, 7]
// Output: 16
// Explanation: Max subarray sum is 16 of elements (5, 4, 7)
class Solution {
    // Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr) {
        // code here
        let res = arr[0];
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
        
    }
}