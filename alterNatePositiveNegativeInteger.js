// Alternate positive and negative numbers
// Difficulty: EasyAccuracy: 33.86%Submissions: 209K+Points: 2
// Given an unsorted array arr containing both positive and negative numbers. Your task is to rearrange the array and convert it into an array of alternate positive and negative numbers without changing the relative order.

// Note:
// - Resulting array should start with a positive integer (0 will also be considered as a positive integer).
// - If any of the positive or negative integers are exhausted, then add the remaining integers in the answer as it is by maintaining the relative order.
// - The array may or may not have equal number of positive and negative integers.

// Examples:

// Input: arr[] = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// Output: [9, -2, 4, -1, 5, -5, 0, -3, 2]
// Explanation: The positive numbers are [9, 4, 5, 0, 2] and the negative integers are [-2, -1, -5, -3]. Since, we need to start with the positive integer first
// and then negative integer and so on (by maintaining the relative order as well), hence we will take 9 from the positive set of elements and then
// -2 after that 4 and then -1 and so on.
// Input: arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
// Output: [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
// Explanation : The positive numbers are [5, 2, 4, 7, 1, 8, 0] and the negative integers are [-5,-2,-8]. According to the given conditions we will start
// from the positive integer 5 and then -5 and so on. After reaching -8 there are no negative elements left, so according to the given rule, we will
// add the remaining elements (in this case positive elements are remaining) as it in by maintaining the relative order.
// Input: arr[] = [9, 5, -2, -1, 5, 0, -5, -3, 2]
// Output: [9, -2, 5, -1, 5, -5, 0, -3, 2]
// Explanation: The positive numbers are [9, 5, 5, 0, 2] and the negative integers are [-2, -1, -5, -3]. Since, we need to start with the positive integer first
// and then negative integer and so on (by maintaining the relative order as well), hence we will take 9 from the positive set of elements and then
// -2 after that 5 and then -1 and so on.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// -106 ≤ arr[i] ≤ 106
class Solution {
    rearrange(arr) {
        // code here
     
      let n = arr.length;
        // Separate arrays to hold negative and positive elements
        let neg = [];
        let pos = [];

        // Traverse the array and separate negative and positive elements
        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) {
                neg.push(arr[i]); // Add negative elements to the `neg` array
            } else {
                pos.push(arr[i]); // Add positive elements to the `pos` array
            }
        }

        // Initialize pointers for traversing the `neg` and `pos` arrays
        let i = 0, j = 0, k = 0;

        // Place positive and negative elements alternately in the original array
        while (i < neg.length && j < pos.length) {
            arr[k++] = pos[j++]; // Place a positive element
            arr[k++] = neg[i++]; // Place a negative element
        }

        // If there are remaining positive elements, add them to the array
        while (j < pos.length) {
            arr[k++] = pos[j++];
        }

        // If there are remaining negative elements, add them to the array
        while (i < neg.length) {
            arr[k++] = neg[i++];
        }
    
    }
}