 class Solution {
    // Function to return length of longest subsequence of consecutive integers.
    findLongestConseqSubseq(arr) {
        // code here
        
        if (arr.length === 0) return 0;

    // Sort the array and initialize variables
    arr.sort((a, b) => a - b);
    let longest = 1;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        // If the current element is consecutive to the previous one
        if (arr[i] === arr[i - 1] + 1) {
            currentLength++;
        } else if (arr[i] !== arr[i - 1]) {
            // Update the longest length found so far
            longest = Math.max(longest, currentLength);
            // Reset current length
            currentLength = 1;
        }
    }
    // Final comparison to get the maximum subsequence length
    return Math.max(longest, currentLength);
    }
}
