1. We have two integers m and n, calculate the sum of the cubes of integers from m to n.
           If m>n return 0 or display the proper message 
            test case 1:
                                   m = 2,n=4
                                   2^3+3^3+4^3=99 

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
