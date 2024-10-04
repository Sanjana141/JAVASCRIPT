let m=prompt("Enter value of m:")
let n=prompt("Enter value of n:")
let prod=1
if(m>n){
    document.write(0)
    console.log(0);
    
}
else{
for(let i=m;i<=n;i++){
    if(i%2!==0){
        prod=prod*i;
    }
}}

document.write(prod)
console.log(prod);
