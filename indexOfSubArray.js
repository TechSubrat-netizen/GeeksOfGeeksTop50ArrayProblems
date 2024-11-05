// Indexes of Subarray Sum
// Difficulty: MediumAccuracy: 16.5%Submissions: 1.7MPoints: 4
// Given an unsorted array arr containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray.

// Examples:

// Input: arr[] = [1,2,3,7,5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12.
// Input: arr[] = [1,2,3,4,5,6,7,8,9,10], target = 15,
// Output: [1, 5]
// Explanation: The sum of elements from 1st to 5th position is 15.
// Input: arr[] = [7,2,1], target = 2
// Output: [2, 2]
// Explanation: The sum of elements from 2nd to 2nd position is 2.
// Input: arr[] = [5,3,4], target = 2
// Output: [-1]
// Explanation: There is no subarray with sum 2.
// Constraints:
// 1 <= arr.size()<= 106
// 0 <= arr[i] <= 103
// 0 <= target <= 109

class Solution {
    subarraySum(arr, target) {
        // code here
        let currentSum = 0;
        const sumMap = new Map();

        for (let i = 0; i < arr.length; i++) {
            currentSum += arr[i];

            if (currentSum === target) {
                return [1, i + 1];
            }

            if (sumMap.has(currentSum - target)) {
                return [sumMap.get(currentSum - target) + 2, i + 1];
            }

            sumMap.set(currentSum, i);
        }

        return [-1];
    }
}