// Minimize the Heights II
// Difficulty: MediumAccuracy: 15.06%Submissions: 620K+Points: 4
// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

// Examples :

// Input: k = 2, arr[] = {1, 5, 8, 10}
// Output: 5
// Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.
// Input: k = 3, arr[] = {3, 9, 12, 16, 20}
// Output: 11
// Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 
// Expected Time Complexity: O(n*logn)
// Expected Auxiliary Space: O(n)

// Constraints
// 1 ≤ k ≤ 107
// 1 ≤ n ≤ 105
// 1 ≤ arr[i] ≤ 107
class Solution {
    // Function to get the minimum difference between the heights.
    getMinDiff(arr, k) {
        // your code here
       
        let n = arr.length;
        // Sorting the array in ascending order
        arr.sort((a, b) => a - b);
        // Initializing the answer with the difference between the last and first
        // element
        let ans = arr[n - 1] - arr[0];

        // Initializing temporary variables for minimum and maximum elements
        let tempmin, tempmax;

        // Iterating through the elements of the array
        for (let i = 1; i < n; i++) {
            // If the current element is less than k or the previous element is less
            // than k, skip this iteration
            if (arr[i] >= k && arr[n - 1] >= k) {
                tempmin = Math.min(arr[0] + k, arr[i] - k);
                tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
                ans = Math.min(ans, tempmax - tempmin);
            }
        }

        // Returning the final minimum difference
        return ans;
    }
}