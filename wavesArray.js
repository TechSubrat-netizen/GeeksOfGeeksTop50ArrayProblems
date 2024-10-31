// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place). In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....
// If there are multiple solutions, find the lexicographically smallest one.

// Note: The given array is sorted in ascending order, and you don't need to return anything to change the original array.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [2, 1, 4, 3, 5]
// Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3, 5.
// Input: arr[] = [2, 4, 7, 8, 9, 10]
// Output: [4, 2, 8, 7, 10, 9]
// Explanation: Array elements after sorting it in the waveform are 4, 2, 8, 7, 10, 9.

// Input: arr[] = [1]
// Output: [1]
// Constraints:
// 1 ≤ arr.size ≤ 106
// 0 ≤ arr[i] ≤107

class Solution {
    // arr: input array
    // Function to sort the array into a wave-like array.
    convertToWave(arr) {
        // your code here
       if(arr.length<2)return arr
       for(let i=0;i<arr.length-1;i+=2){
        let temp=arr[i];
        arr[i]=arr[i+1]
        arr[i+1]=temp
       }
       return arr
    }
}
