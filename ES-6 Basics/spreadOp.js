//arrays
const numbers = [1,2,3,4]
const NewNumbers = [...numbers,5,6,7,8]
console.log(NewNumbers)


//objects
const Person = {
    name: "Ahrar"
};

const newPerson = {...Person,age:"29"}
console.log(newPerson)

//functions

const filterFunc = (...args) => {
    //filter the args and return only [1] if 1 exists there
    return args.filter(el => el === 1 )
}
console.log(filterFunc(1,2,4,5,2))






//To run this code in the console go here: https://jsbin.com/helajiwore/edit?js,console