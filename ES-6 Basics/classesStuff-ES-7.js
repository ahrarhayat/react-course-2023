class Human {
   //this statement is directly acting as the constructor 
   gender = "male"
   printMyGender = () => {
    console.log(this.gender)
   }
}

class Person extends Human {
    //this statement is directly acting as the constructor 
    name = "Ahrar"
    gender = "Female"

    printMyName = () => {
        console.log(this.name)
    }
}


const person = new Person()
person.printMyName()
person.printMyGender()

//To run this code in the console go here: https://jsbin.com/helajiwore/edit?js,console
