function sum(arr){
    let tong=0;
    for (let i=0; i<arr.length;i++){
        tong=tong+arr[i];
    }
return tong;
}
let arr=[1,2,3,4,5,6]    
console.log('Tổng của mảng là: '+ `${sum(arr)}`)