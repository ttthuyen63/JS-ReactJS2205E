function reverse(str=''){
    let newStr='';
    for (i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    console.log('Chuỗi sau khi đảo ngược là: '+newStr)
}
reverse('Hello')