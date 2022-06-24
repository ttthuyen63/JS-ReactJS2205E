function dem_nguyenam(str=''){
    let dem=0;
    for (let i=0;i<str.length;i++){
        if (str[i]=='a'||str[i] == 'e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            dem=dem+1;
        }
    }console.log('Chuỗi đã cho có: ' + `${dem}` + ' nguyên âm')
}
dem_nguyenam('hueoskfngi')