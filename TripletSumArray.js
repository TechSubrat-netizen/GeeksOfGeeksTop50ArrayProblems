// Triplet Sum in Array
// Difficulty: MediumAccuracy: 35.0%Submissions: 305K+Points: 4
// Given an array arr of size n and an integer x. Find if there's a triplet in the array which sums up to the given integer x.

// Examples

// Input:n = 6, x = 13, arr[] = [1,4,45,6,10,8]
// Output: 1
// Explanation: The triplet {1, 4, 8} in the array sums up to 13.
// Input: n = 6, x = 10, arr[] = [1,2,4,3,6,7]
// Output: 1
// Explanation: Triplets {1,3,6} & {1,2,7} in the array sum to 10. 
// Input: n = 6, x = 24, arr[] = [40,20,10,3,6,7]
// Output: 0
// Explanation: There is no triplet with sum 24. 
// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ n ≤ 103
// 1 ≤ arr[i] ≤ 105
class Solution {

    // Should return true if there exists a triplet in the
    // array arr[] which sums to x. Otherwise false
    find3Numbers(arr, n, x) {
        // your code here
    
      arr.sort((a, b) => a - b);

    // Step 2: Traverse the array and fix one element, then use two pointers
    for (let i = 0; i < n - 2; i++) {
        // Initialize two pointers
        let left = i + 1;
        let right = n - 1;

        // Step 3: Find if there's a pair with sum equal to x - arr[i]
        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];

            // If we found the triplet
            if (currentSum === x) {
                return 1;
            }
            // If the current sum is less, move the left pointer to increase sum
            else if (currentSum < x) {
                left++;
            }
            // If the current sum is more, move the right pointer to decrease sum
            else {
                right--;
            }
        }
    }
    // If no triplet found
    return 0;
     
    }
}
