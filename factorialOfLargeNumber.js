class Solution {
    factorial(N){
       //code 
       let fact = BigInt(1);

    // Calculate factorial using BigInt to handle large numbers
    for (let i = 2; i <= N; i++) {
        fact *= BigInt(i);
    }

    // Store digits in an array
    let result = [];
    while (fact > 0) {
        result.unshift(Number(fact % BigInt(10))); // Add each digit to the start of the array
        fact = fact / BigInt(10); // Remove last digit
    }

    return result;
        
    }
}