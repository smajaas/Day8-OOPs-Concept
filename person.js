//Create a class name Person

class Person {

    //Create constructor with parameters

    constructor (fname,lname,age,gender,email,maritalstatus,contact,interests) {

//this is value of the object
    this.name = {fname:fname,
        lname:lname};
    this.age=age;
    this.gender=gender;
    this.email=email;
    this.maritalstatus=maritalstatus;
    this.contact=contact;
    this.interests=interests;
         };
}

//We have then created an object instance like this:
const person1=new Person('Mohammed','Ajaas',37,'Male','smajaas@gmail.com','Married',9585893250,['Driving','Beach','Variety Food']);
const person2=new Person('M.A','Afaan',3,'Male','NA','Single',9585893250,['Cycle','Icecream','Travelling']);
const person3=new Person('Shahul','Hameed',65,'Male','NA','Married',9585775439,['Television','Family',]);

console.log(person1);
console.log(person2);
console.log(person3);