// Minimum in a Sorted and Rotated
// Difficulty: EasyAccuracy: 40.57%Submissions: 109K+Points: 2
// A sorted(in ascending order) array arr[ ] with distinct elements is rotated at some unknown point, the task is to find the minimum element in it.

// Examples:

// Input: arr[] = [4 ,5 ,1 ,2 ,3]
// Output: 1
// Explanation: 1 is the minimum element in the array.
// Input: arr[] = [50, 40, 30, 20, 10, 5]
// Output: 5
// Explanation: Here 5 is the minimum element.
// Input: arr[] = [4]
// Output: 4
// Explanation: Here 4 is the only minimum element.
class Solution {
    // Function to find the minimum element in a sorted and rotated array.
    findMin(arr) {
        // your code here
        let min=arr[0]
        for(let i=0;i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i]
            }
        }
        return min
    }
}