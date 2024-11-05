// You are given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// If there are no such elements return an empty array. In this case, the output will be -1.

// Note: can you handle the duplicates without using any additional Data Structure?

// Examples :

// Input: arr1 = [1, 5, 10, 20, 40, 80] , arr2 = [6, 7, 20, 80, 100] , arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
// Output: [20, 80]
// Explanation: 20 and 80 are the only common elements in arr, brr and crr.
// Input: arr1 = [1, 2, 3, 4, 5] , arr2 = [6, 7] , arr3 = [8,9,10]
// Output: [-1]
// Explanation: There are no common elements in arr, brr and crr.
// Input: arr1 = [1, 1, 1, 2, 2, 2], B = [1, 1, 2, 2, 2], arr3 = [1, 1, 1, 1, 2, 2, 2, 2]
// Output: [1, 2]
// Explanation: We do not need to consider duplicates
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Here n = Total sizes of arr1, arr2, and arr3

// Constraints:
// 1 <= arr1.size(), arr2.size(), arr3.size() <= 105
// -105 <= arr1i , arr2i , 1arr3i <= 105
class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        // Code Here
      let map=new Map()
      arr1.array.forEach(e => {
        map.set(e,1)
      });
      arr2.forEach((e)=>{
        if(map.has(e)&&  map.get(e)==1){
            map.set(e,2)
        }
      })
      arr3.forEach((e)=>{
        if(map.has(e)&& map.get(e)==2){
            map.set(e,3)
        }
      })
      let result=[]
      map.forEach((val,key)=>{
        if(val==3){
            result.push(key)
        }
      })
      return result

        
    }
}