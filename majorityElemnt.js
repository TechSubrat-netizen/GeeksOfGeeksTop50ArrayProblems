// Given an array arr. Find the majority element in the array. If no majority exists, return -1.

// A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [3, 1, 3, 3, 2]
// Output: 3
// Explanation: Since, 3 is present more than n/2 times, so it is the majority element.
// Input: arr[] = [7]
// Output: 7
// Explanation: Since, 7 is single element and present more than n/2 times, so it is the majority element.
// Input: arr[] = [2, 13]
// Output: -1
// Explanation: Since, no element is present more than n/2 times, so there is no majority element.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i]≤ 105

class Solution {
    majorityElement(arr) {
        // code here
       if(arr==1) return arr[0]
       for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr.length;j++){
            count++
        }
        if(count>arr.length/2){
            return arr[i]
        }
       }
     return -1
    }
}