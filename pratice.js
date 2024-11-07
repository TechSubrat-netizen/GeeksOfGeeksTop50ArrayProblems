    // code here
    let arr=[
        1, 9, 3, 10, 4, 20, 2]
     function findLongestConseqSubseq(arr){   
    arr.sort((a,b)=>a-b)
  
    let count=0;
    for(let i=0;i<arr.length;i++){
     let val=arr[i]+1
     if(val==arr[i+1]){
         count++
     }
     
     
    }
    return count
}
console.log(findLongestConseqSubseq(arr));
