// Given an array arr of integers, find all the elements that occur more than once in the array. Return the result in ascending order. If no element repeats, return an empty array.

// Examples:

// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3] 
// Explanation: 2 and 3 occur more than once in the given array.
// Input: arr[] = [0, 3, 1, 2] 
// Output: [] 
// Explanation: There is no repeating element in the array, so the output is empty.
// Input: arr[] = [2]
// Output: [] 
// Explanation: There is single element in the array. Therefore output is empty.

class Solution {
    findDuplicates(arr) {
        // code here
        let sArray=arr.sort((a,b)=>a-b)// array will arrange in asscending order
        let result=[]// the duplicate values will be stored in result
        for(let i=0;i<arr.length;i++){
            if(arr[i]==arr[i+1]){
                result.push(arr[i])
            }
        }
        return result
     
    }
}
// Another way using "SET" Data Structure
class Solution {
    findDuplicates(arr) {
        // code here
     let set= new Set()
     let result=[]
     for(let i=0;i<arr.length;i++){
        if(!set.has(arr[i])){
            set.add(arr[i])
        }
        else{
            result.push(arr[i])
        }
     }
     return result.sort((a,b)=>a-b)// the result should be in ascending order
    }
}