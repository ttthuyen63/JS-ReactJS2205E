const fulldata = require ('./data.json')
const newArr = fulldata.map((item, index) => {
    return `${item.first_name} ${item.last_name}`
})
console.log(newArr)