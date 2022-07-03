const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
//mảng gồm các names
/*const resultNames = characters.map((item)=>{
    return `${item.name}`
})
console.log(resultNames)
*/

//mảng gồm các height
// const resultHeight = characters.map((item)=>{
//     return `${item.height}`
// })
// console.log(resultHeight)

//person có height <180
// const resultpersonHeight = characters.map((item)=>{
//     if (item.height<180) return {...item}
// })
// console.log(resultpersonHeight.filter(el=>el))

//person có mass >100
// const resultpersonMass = characters.map((item)=>{
//     if (item.mass>100) return {...item}
// })
// console.log(resultpersonMass.filter(el=>el))

//sắp xếp mảng theo tên
// const resultName = characters.sort(function(a,b){
//    return a.name.localeCompare(b.name);
// })
// console.log(resultName)

//sắp xếp theo mass
// const resultMass = characters.sort((a,b)=>{
//     if (a.mass>b.mass) return 1
//     else if (a.mass===b.mass) return 0
//     return -1
// })
// console.log(resultMass)

//sắp xếp theo height
// const resultHeight = characters.sort((a,b)=>{
//     if (a.height>b.height) return 1
//     else if (a.height===b.height) return 0
//     return -1
// })
// console.log(resultHeight)

//sắp xếp mảng theo giới tính
// const resultGender = characters.sort(function(a,b){
//    return a.gender.localeCompare(b.gender);
// })
// console.log(resultGender)