const numbers = [1,2,3,4,5]

//this function takes each of the elements in the array and does sth, here it is multiplying by 2
const double = numbers.map((num) => {
    return num * 2
})

console.log(double)