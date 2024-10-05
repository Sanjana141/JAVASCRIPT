let arr=[];
let n=prompt("enter the length"
    
)
for(let i=0;i<n;i++){
    arr[i]=prompt("enter the number ")
}
let t=0
let t1=0
let arr1=[];
let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        arr1[t]=arr[i];
        t++;
    }
    else{
        arr2[t1]=arr[i];
        t1++
    }
  
}
const combined=arr1.concat(arr2)
alert(combined)