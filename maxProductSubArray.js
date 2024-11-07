// Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr.

// Note: It is guaranteed that the output fits in a 32-bit integer.

// Examples

// Input: arr[] = [6, -3, -10, 0, 2]
// Output: 180
// Explanation:  The subarray [6, -3, -10] gives max product as 180.
// Input: arr[] = [2, 3, 4, 5, -1, 0]
// Output: 120
// Explanation: The subarray [2, 3, 4, 5] gives max product as 120.
// Input: arr[] = [2, 3, 4]
// Output: 24
// Explanation: For an array with all positive elements, the result is product of all elements.
// Constraints:
// 1 ≤ arr.size() ≤ 2*104
// -10  ≤  arr[i]  ≤  10

class Solution {
    maxProduct(arr) {
        // code herei
      let max=[arr[i]]
      let min=[arr[i]]
      let result=arr[0]
      for(let i=1;i<arr.length;i++){
        let num=arr[i]
        max[i]=Math.max(num,num*max[i-1],num*min[i-1])
        min[i]=Math.min(num,num*max[i-1],num*min[i-1])
        result=Math.max(result,max)
      }
      return result
    }
}