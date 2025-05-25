// ---------------- date object ---------------- //
// const date = new Date();
// console.log(date); 

// const date = new Date("2022-03-25");
// console.log(date); 

// ---------------- date year,month ------------------ //
// const date = new Date(2018,11,24,10,33,30,0);
// console.log(date);

// ---------------- math object -------------------- //
// const num = Math.PI;
// console.log(num); 

// ----------------- math methods -------------------- //
// const num = Math.round(4.6);
// console.log(num);
// const num1 = Math.ceil(4.2);
// console.log(num1);
// const num2 = Math.floor(4.9);
// console.log(num2);
// const num3=Math.trunc(3.12);
// console.log(num3);

// ---------------- math random ------------------ //
// const num = Math.random();
// console.log(num);

// ----------------- boolean function ---------------- //
// const num=Boolean(10>11);
// console.log(num); 
// const num1=Boolean(10<11);
// console.log(num1);

// ----------------- Functions ------------------- //
// function course(){
//     console.log("JavaScript");
//     console.log("HTML");
//     console.log("CSS");
//     console.log("React");
//     console.log("Node");
// }
// course();

// --------------------- function with parameters and arguments -------------------- //
// function myFunction(a,b){
//     return a*b;
// }
// const result=myFunction(10,20);
// console.log(result);

// function addition(a,b){
//     console.log(a+b);
// }
// addition(10,20);

// function default parameters
// function myFunction(a,b=20){
//     return a+b;
// }
// console.log(myFunction(10));

// function rest parameters
// function myFunction(...args){
//     return args;
// }
// console.log(myFunction(10,20,30,40));

// function calculateCartPrice(val1,val2,...num){
//     return calculateCartPrice;
// }
// console.log(calculateCartPrice(10,20,30,40,50));

// ----------------- functions using objects --------------- //
// const myArray=[1,2,3,4,5];
// function myFunction(myArray){
//     return myArray[3];
// }
// console.log(myFunction(myArray));

// practice example return the vowels 
// function countVowels(str){
//     let count=0;
//     const vowels="aeiouAEIOU";
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// let result=countVowels("Hello World");
// console.log("number of vowels:",result);

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