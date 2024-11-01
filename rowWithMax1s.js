// Row with max 1s
// Difficulty: MediumAccuracy: 33.09%Submissions: 315K+Points: 4
// You are given a 2D array consisting of only 1's and 0's, where each row is sorted in non-decreasing order. You need to find and return the index of the first row that has the most number of 1s. If no such row exists, return -1.
// Note: 0-based indexing is followed.

// Examples:

// Input: arr[][] = [[0, 1, 1, 1],
//                [0, 0, 1, 1],
//                [1, 1, 1, 1],
//                [0, 0, 0, 0]]
// Output: 2
// Explanation: Row 2 contains 4 1's.
// Input: arr[][] = [[0, 0], 
//                [1, 1]]
// Output: 1
// Explanation: Row 1 contains 2 1's.
// Expected Time Complexity: O(n+m) 
// Expected Auxiliary Space: O(1)

// Note : Here n,m refers to the number of rows and columns respectively.

// Constraints:
// 1 ≤ number of rows, number of columns ≤ 103
// 0 ≤ arr[i][j] ≤ 1 

class Solution {
    /**
    * @param number[] a
    * @param number[][] arr

    * @returns number
    */
    rowWithMax1s(arr) {
        // code here
       let maxcount=0;
       let rowIndex=-1;
       for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==1)
             count++
        }
        if(count>maxcount){
            maxcount=count;
            rowIndex=i
        }
       }
       return rowIndex
    }
}
