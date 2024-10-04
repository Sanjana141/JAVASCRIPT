let m=prompt("Enter the value of m:")
let n=prompt("Enter the value of n:")
let sum=0
if(m>n){
    document.write(0)
}
else{
    for(let i=m;i<=n;i++){
        sum=sum+(i*i*i)
    }
    document.write(sum)
}
