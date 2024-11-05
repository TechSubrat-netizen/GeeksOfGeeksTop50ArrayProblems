// Missing in Array
// Difficulty: EasyAccuracy: 29.59%Submissions: 1.2MPoints: 2
// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

// Examples:

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.
// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.
// Input: arr[] = [1]
// Output: 2
// Explanation: Only 1 is present so the missing element is 2.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ arr.size() + 1
class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
        // code here
        arr.sort((a,b)=>a-b)
        let n =arr.length
        let sum=(n+1)*(n+2)/2
        let actualSum=arr.reduce((sum,num)=>sum+num,0)
        return sum-actualSum
    }
}