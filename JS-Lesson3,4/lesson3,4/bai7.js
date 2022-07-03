const fullData=require('./data.json')
//const resultName = fullData.sort(function(a,b){
//    return a.first_name.localeCompare(b.first_name);
//})
//console.log(resultName)
const resultSalary = fullData.sort((a,b)=>{
    if (a.salary>b.salary) return 1
    else if (a.salary===b.salary) return 0
    return -1
})
console.log(resultSalary)