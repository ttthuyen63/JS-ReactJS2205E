const fulldata = require('./data.json')
const allFullname = []
fulldata.forEach(
   function (item, index, array){
       const fullName=`${item.first_name} ${item.last_name}`
       allFullname.push(fullName)
   }
)
console.log(allFullname)

//dùng reduce
// let result = fulldata.reduce((preValue, currentValue) => {
//     preValue.push (`${currentValue.first_name} ${currentValue.last_name}`)
//     return preValue
// }, [])
// console.log(result)

