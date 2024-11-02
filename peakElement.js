// Given an 0-indexed array of integers arr[], find its peak element and return its index. An element is considered to be peak if its value is greater than or equal to the values of its adjacent elements (if they exist).

// Note: The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".

// Examples :

// Input: arr = [1, 2, 3]
// Output: true
// Explanation: If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and there is no element after it, we can consider it as a peak element. No other index satisfies the same property, so answer will be printed as 0.
// Input: arr = [1, 1, 1, 2, 1, 1, 1]
// Output: true
// Explanation: In this case there are 5 peak elements with indices as {0,1,3,5,6}. Returning any of them will give you correct answer.
// Input: arr = [1, 1, 1]
// Output: true
// Explanation: In this case, all elements are peak elements.
class Solution {
    peakElement(arr) {
        // Code here
       let n=arr.length
       if(n==1)return 0
       if(arr[0]>arr[1]) return 0
       if(arr[n-1]>=arr[n-2])return  n-1

       let left=1
       let right=n-2
       while(left<=right){
        const mid = Math.floor((left + right) / 2);
            if (arr[mid] >= arr[mid - 1] && arr[mid] >= arr[mid + 1]) return mid;
            if (arr[mid - 1] >= arr[mid]) right = mid - 1;
            else left = mid + 1;
       }

       return -1
    }
}