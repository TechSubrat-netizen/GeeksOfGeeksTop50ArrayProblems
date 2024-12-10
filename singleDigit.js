let arr=[99,9992,94694,12];
let sum=0;

for(let i=0;i<arr.length;i++){
  let val=arr[i];
  let sum=0;
  while(val>0){
    sum+=val%10;
    val=Math.trunc(val/10)
    if(val==0){
        if(sum>9){
            val=sum;
            sum=0;
        }
    }
  }
  arr[i]=sum

}
console.log(arr);
