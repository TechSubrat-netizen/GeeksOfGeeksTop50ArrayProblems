let a=[1,2,3];
let b=[1,2,3,4,5];
let c=[]
let i=0;
let j=0;
while(i<a.length && j< b.length){
    c.push(a[i]+b[j]);
    i++;
    j++
}
while(i<a.length){
    c.push(a[i])
    i++
}
while(j<b.length){
    c.push(b[j])
    j++
}
console.log(c);

