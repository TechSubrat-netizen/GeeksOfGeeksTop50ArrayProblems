let arr=[7,14,20,31];
function isPrime(n){
    if(n<=1) return false
    for(let i=2;i<=Math.trunc(n/2);i++){
        if(n%i==0)return false
    }
    return true
}
for(let i=0;i<arr.length;i++){
    if(!isPrime(arr[i])){
        for(let j=++arr[i];true;j++){
         if(isPrime(j)){
            arr[i]=j;
            break;
         }
        }
    }
}
console.log(arr);
