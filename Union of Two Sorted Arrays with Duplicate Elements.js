class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        // your code here
        a.sort((a,b)=>a-b);
        b.sort((a,b)=>a-b)
        let result=[]
        let temp=[]
        let set= new Set()
        for(let i=0;i<a.length;i++){
            result.push(a[i])
        }

        for(let i=0;i<b.length;i++){
            result.push(b[i])
        }
         
       result.sort((a,b)=>a-b)
       for(let i=0;i<result.length;i++){
           
           if(!set.has(result[i])){
               set.add(result[i])
               temp.push(result[i])
           }
       }
       return temp
    }
}