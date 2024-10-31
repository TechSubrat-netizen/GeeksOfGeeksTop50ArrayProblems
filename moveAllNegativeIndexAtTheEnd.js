// Move all negative elements to end
// Difficulty: EasyAccuracy: 56.24%Submissions: 138K+Points: 2
// Given an unsorted array arr[ ] having both negative and positive integers. The task is to place all negative elements at the end of the array without changing the order of positive elements and negative elements.

// Note: Don't return any array, just in-place on the array.

// Examples:

// Input : arr[] = [1, -1, 3, 2, -7, -5, 11, 6 ]
// Output : [1, 3, 2, 11, 6, -1, -7, -5]
// Explanation: By doing operations we separated the integers without changing the order.
// Input : arr[] = [-5, 7, -3, -4, 9, 10, -1, 11]
// Output : [7, 9, 10, 11, -5, -3, -4, -1]
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 ≤ arr.size ≤ 106
// -109 ≤ arr[i] ≤ 109
class Solution {
    segregateElements(arr) {
        // code here
      let temp=[]
      for(let i=0;i<arr.length;i++)
      {
        if(arr[i]>0){
            temp.push(arr[i])
        }
      }
      for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            temp.push(arr[i])
        }
      }
      
      for(let i=0;i<arr.length;i++){
      arr[i]=temp[i]
      }
      
    
      
    }
}
