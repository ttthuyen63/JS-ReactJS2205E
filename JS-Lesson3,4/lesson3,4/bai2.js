//Bài 2: Tìm user là male và có tuổi dưới 40
const fullData = require("./data.json")

const result = fullData.map((item, index) => {
  if (item.gender === "Male" && item.age < 40) {
    return {...item}
  }
})
//đã chữa 
console.log(result.filter(el=>el))
