// You are given an array of integers arr . Your task is to reverse the given array.

// Examples:

// Input: arr = [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
// Explanation: The elements of the array are 1 2 3 4. After reversing the array, the first element goes to the last position,
// the second element goes to the second last position and so on. Hence, the answer is 4 3 2 1.
// Input: arr = [1]
// Output: [1]
// Explanation: The array has only single element, hence the reversed array is same as the original.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(1)

// Constraints:
// 1<=arr.size()<=105
// 0<=arr[i]<=105
class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // your code here
      let left=0;
      let right=arr.lenght-1;
      while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp
        left ++
        right --
      }
    }
}

