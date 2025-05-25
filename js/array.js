// let fruits=["apple","banana","mango"];
// console.log(fruits);

// -------accessing array Element--------//

// let fruits=["apple","banana","mango"];
// let fruits=fruits[2];
// console.log(fruits);

// -----------changing an Array Element-----------//

// let fruits=["apple","banana","mango"];
// fruits[0]="orange";
// console.log(fruits);

// ---------practice---------//

// let cars=["Audi","Toyota","BMW","tata","jeep","kia"];
// console.log(cars);
// cars[6]="honda";
// console.log(cars);
// console.log(cars[3]);

// ----------looping array Element--------//

// let fruits=["apple","banana","mango"];
// for (let i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }

// ------------Using for-of loop-----------//

// let fruits=["apple","banana","mango"];
// for(const fruit of fruits)
// {
//     console.log(fruit);
// }

// --------------using for-in loop-----------//

// let fruits=["apple","banana","mango"];
// for(const index in fruits)
// {
//     console.log(fruits[index]);
// }

// --------using for-in loop--------//

// let number=[10,56,89,75];

// for(const index in number)
// {
//     console.log(number[index]);
// }

// ------------UpperCase-----------//

// let fruits=["apple","banana","mango"];
// for(let fruit of fruits)
// {
//     console.log(fruit.toUpperCase());
// }

// -------------LowerCase-----------//

// let fruits=["APPLE","BANANA","MANGO"];
// for(let fruit of fruits)
// {
//     console.log(fruit.toLowerCase());
// }


// -----------Practice using for loop ---------//

// let students=[10,20,30,40,50];
// let sum=0;
// for(let i=0;i<students.length;i++)
// {
//     sum+=students[i];
// }
// let avg=sum/students.length;
// console.log(avg);

// -------------Practice using for-of loop------------//

// let students=[10,20,30,40,50];
// let sum=0;
// for(let val of marks)
// {
//     sum+=val;
// }
// let avg=sum/students.length;
// console.log(avg);


// =======Array methods====== //

// let marks=[1,2,3,4,5]
// marks.push(6);
// console.log(marks);

// -----------Unshift----------- //

// let marks=[1,2,3,4,5]
// marks.unshift(9);
// console.log(marks);

// -----------shift----------- //

// let marks=[9,1,2,3,4,5]
// marks.shift();
// console.log(marks);

// -----------includes------------- //

// let marks=[0,1,2,3,4,5,];
// console.log(marks.includes(7));

// --------------index of the specified Element--------------- //

// let marks=[0,1,2,3,4,5,];
// console.log(marks.indexOf(3));

// ------------Array pop-------------- //

// let marks=[1,2,3,4,5];
// marks.pop();
// console.log(marks);

// -----------concatination of two Arrays ---------------//

// const roll=[1,2,3,4,5];
// const numbers=[6,7,8,9,10];
// const rollnumbers=roll.concat(numbers);
// console.log("merged Array:",rollnumbers);

// ----------sorting the array---------- //

// const numbers=[3,4,2,6,8,1,5,7];
// console.log(numbers.sort());

// ----------reverse the array---------- //

// const numbers=[8,7,6,5,4,3,2,1];
// console.log(numbers.reverse());

// =============Practice=============== //

// function add(num1,num2){
//     return num1+num2;
// }
// function sub(num1,num2){
//     return num1-num2;
// }
// function mul(num1,num2){
//     return num1*num2;
// }
// function div(num1,num2){
//     return num1/num2;
// }
// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(mul(10,20));
// console.log(div(10,20));

// ------------local variable---------- //
// function myFunction(){
//     let a=4;
//     return a*a;
// }
// console.log(myFunction());

// --------global variable-------- //
// let a=4;
// function myFunction(){
//     return a*a;
// }
// console.log(myFunction());


// ------------callback---------- //

// function myDisplayer(message)
// {
// console.log(message);
// }
// function myFirst()
// {
// myDisplayer("I will call back later!");
// }
// myFirst();

// ----------"hello, goodbye!"----------- //

// function myDisplayer(message)
// {
//     console.log(message);
// }

// function myFirst()
// {
//     myDisplayer("hello");
// }

// function mySecond()
// {
//     myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();
