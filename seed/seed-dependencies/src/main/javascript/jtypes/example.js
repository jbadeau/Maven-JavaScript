﻿var Person = $$(function($fName, $lName, $age)
{
    // set the readonly fields (cast the string arguments)
    this.firstName = $$.asString($fName);
    this.lastName  = $$.asString($lName);

    // set the protected field (cast the number arguments)
    this._age = $$.asInt($age);
},
{
    'public readonly firstName': '',
    'public readonly lastName': '',

    'protected _age': 0,
 
    'public getFullName': function()
    {
        // return the concatenated full name
        return this.firstName + ' ' + this.lastName;
    },
 
    'public virtual triggerOneYearOlder': function()
    {
        // increment the protected field
        this._age++;
    },

    'public age':
    {
        'get': function()
        {
            // return the protected field
            return this._age;
        },
        'set': function($v)
        {
            // if the incoming property value is valid, set the protected field
            if ($v > 0)
                this._age = $v;
        }
    }
});

var Employee = $$(Person, function($fName, $lName, $age, $salary)
{
    // call the base constructor
    this.__base($fName, $lName, $age);
    
    // set the protected salary field
    this._salary = $salary;
},
{
    'protected _salary': 0,
 
    'public override triggerOneYearOlder': function()
    {
        // increment the protected age field (by calling the base method)
        this.__base.triggerOneYearOlder();

        // increase the salary by three percent
        this._salary *= 1.03;
    },
 
    'public salary':
    {
        'get': function()
        {
            // return the salary
            return this._salary;
        }
    }
});

// instantiate a person object
var p = new Person('John', 'Doe', 30);
 
// check that the values were set
console.log(p.firstName);// John
console.log(p.lastName);// Doe
console.log(p.age);// 30
 
// get a protected field
console.log(p._age);// undefined
 
// set a readonly field (throws an exception)
//p.firstName = 'Jane'; (uncomment to check)
 
// set an invalid property value (throws if you code it)
p.age = -40;
 
// check that the field and property didn't change
console.log(p.firstName);// John
console.log(p.age);// 30
 
// set a valid property value
p.age = 40;
 
// check that the property did change
console.log(p.age);// 40
 
// invoke a method
console.log(p.getFullName());// John Doe
 
// invoke a virtual method
p.triggerOneYearOlder();
 
// check that the age was incremented (by the virtual method)
console.log(p.age);// 41

// instantiate an employee object
var e = new Employee(p.firstName, p.lastName, p.age, 75000);
 
// check that the inherited values were set
console.log(e.firstName);// John
console.log(e.lastName);// Doe
console.log(e.age);// 41
 
// get an inherited protected field
console.log(e._age);// undefined
 
// set an inherited readonly field (throws an exception)
//e.firstName = 'Jane'; (uncomment to check)
 
// check that the field didn't change
console.log(e.firstName);// John
 
// get a declared field (not inherited)
console.log(e.salary);// 75000
 
// cast the employee object as a person object
e = e.as(Person);
 
// check the types of both person objects
console.log(p instanceof Person);// true
console.log(p instanceof Employee);// false
console.log(e instanceof Person);// true
console.log(e instanceof Employee);// true
 
// check that both person objects don't have the derived property
console.log(p.salary);// undefined
console.log(e.salary);// undefined
 
// invoke an overridden method
e.triggerOneYearOlder();
 
// cast the person object as an employee object
e = e.as(Employee);
 
// check that the age was incremented (by the base method)
console.log(e.age);// 42
 
// check that the salary increased 3% (by the overridden method)
console.log(e.salary);// 77250