// Given an array of integers, arr[]. Find if there is a subarray (of size at least one) with 0 sum. Return true/false depending upon whether there is a subarray present with 0-sum or not. 

// Examples:

// Input: arr[] = [4, 2, -3, 1, 6]
// Output: true
// Explanation: 2, -3, 1 is the subarray with a sum of 0.
// Input: arr = [4, 2, 0, 1, 6]
// Output: true
// Explanation: 0 is one of the element in the array so there exist a subarray with sum 0.
// Input: arr = [1, 2, -1]
// Output: false
// Constraints:
// 1 <= arr.size <= 104
// -105 <= arr[i] <= 105

class Solution {
    // Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr) {
       for (let start = 0; start < arr.length; start++) {
        let sum = 0;

        // Inner loop to check each subarray starting from `start`
        for (let end = start; end < arr.length; end++) {
            sum += arr[end];

            // Check if sum of subarray is zero
            if (sum === 0) {
                return true;
            }
        }
    }

    return false;
    }
}
// or
class Solution {
    // Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr) {
      let sum=0
      let set= new Set()
      for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum==0|| set.has(sum)){
            return true
        }
        set.add(arr[i])
      }
      return false
    }
}