function count(arr,x){
    let dem=0;
    for (let i=0; i<arr.length;i++){
        if (arr[i]==x){
            dem=dem+1;
        }
    }console.log('Phần tử ' + `${x}` + ' xuất hiện ' + `${dem}` + ' lần')
}
let arr=[1,1,6,7,8,5,6,7,7,9,6]
count(arr,6)