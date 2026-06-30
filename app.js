// alert("hi");

//  console.log("hi");

// variables
// var, let, const




// var fullName ="Haris Naseer"//string
// let age= -24.01//number
// const isPakistani =45 //boolean

// fullName = "sddhf"
// age=34
// console.log(fullName,age)
// isPakistani=false;//error


// let age=35;
// var fullName="Ali";
// var fullName="Ali";
// var fullName="Shakoor";

// let a;//declaration
// a=87;//intialization


// let b =6;  
a=78;
// //  a=343;

//  let num1=10;
//  let num2=5;
//  let num3="5";
//  let fname ="Jahanzaib"
//  let lname ="Ahmed"
//  console.log(fname +" "+ lname + " is our new CEO.")
//  console.log(num1 +fname)//10Jahanzaib
//  console.log(num1  + num3)//concatenate

//  //operators
// operation  =>  operands, operators (a + b)

//     //arithmatic operators + - * / %
    // console.log(num1+num2);// 26 
    // // console.log("Haris"+" "+"Naseer");//concatenation 
    // console.log(num1-num2);// 20
    // console.log(num1*num2);//69
    // console.log(num1/num2);//
    // console.log(num1%num2);//2
    //increment decrement ++ --

//post increment

// console.log(a++);//a=a+1=>79
// console.log(a);

// pre-increment
// console.log(--a);
// console.log(a);
// ++a;//a=a+1=>89
// a--;

// --a;

    //assignment operators = += -= *= /= %=
let b=5;
// b+=4;//b= b+4 => 5+4=>9
// b-=4;//b= b-4 => 9-4=>5
// b*=4;//b= b*4 => 5*4=>20
// b/=4;//b= b+4 => 20/4=>5
// b%=4;//b= b+4 => 5%4=>1



// console.log(b);

//Conditions
//comparison operators == === != > < >= <= (bool i.e true or false)

// console.log(b=="5");//true

// console.log(b==='5');//false
// console.log(b != '5');//false
// // console.log(5 !=='5');//true
// console.log(b < 67);//true
// console.log(b > 4);//true
// console.log(b >= 4);//true
// console.log(b <= 4);//false

// console.log( 779 >= 880)//false
// console.log( 123 <= 321)// true
// console.log( 400002 <= 9) //false

//     //logical operators && || !
//                 //t     f        t            
//     console.log(b<89 && b==8 && b<=45);//false

//     console.log(b<89 || b==8 || b<=45);//true
//                 //t        f        t
//     console.log(b<89 || !(b<89) || b<=45);//true


    // console.log(!(b<89));//false

    // (username||email||phone)  && (password)
// "haris"                         "sadjhf123" => true
// "haris@gmail.com"                         "sadjhf123"=>true
//  09342039423894                                      =>false 

// Conditional Statements
// if else
            //f                             //t
// if (43759827432798 > 43759827432798  || 487658435 !=7326483264) {
   
//     console.log("if chal gaya");
    
// } else {

//     console.log("else chal gaya");

    
// }


// nested ifs

// if (7 == 7) {
//     console.log("if chal gaya");
    
//     if (8 !=7) {
//         console.log("nested if chal gaya");
//     }else{
//         console.log("nested else chal gaya");
//     }


    
// } else {
//     console.log("else chal gaya");
    
// }


// if else ladder
// if (4 > 3  && 34!=34) { 

//     console.log("if chal gaya");
// } else if(8-8==0){
//     console.log("else if chal gaya");
    
// }else{
//     console.log("else chal gaya");

// }

// let age=40;
// if (age > 80) { 
 
//     console.log("You should not drive");
// } else if(age <=80  || age >= 18 ){
//     console.log("you can drive");
// }
// else{
//     console.log("you cannot drive");

// }




// switch


// let number=3;

// switch (number) {
//     case 1:
//         console.log("Monday");
//         break;
//      case 2:
//      console.log("Tuesday");
//    break;
//    case 3:
//     console.log("Wednesday");
//     break;
//  case 4:
//  console.log("Thursday");
// break;
//     default:
//         console.log("I Don't know");
//         break;
// }

//user input
// let name = prompt("Enter your name: ");
// let age = + prompt("Enter your age: ");  // string  "18"=> 18
// let age = parseInt( prompt("Enter your age: "));  // string  "18"=> 18
// alert("Your name is : "  + name)


// alert(age);
// if(age < 18){
// alert("You cant drive")
// }else{
    
//     alert("You can drive")
// }

// NaN = Not a number







//jump statements(break , continue)

// ternary operator

// console.log( 5 != 5 ? "hi" : "bye");


//loop (to repeat a task till a condition)
//for loop (when we know the number of iterations);
// initialization; condition; increment/decrement
// i here is a loop variable and iterator and have a local scope;

// for(let i=1;        i <10;     i++){

// console.log(i);
// }



// for(let i=10;        i >= 1;     i--){

// console.log(i);
// }

// for(let i=1;        i <=10;     i++){


// if ( i % 2 != 0 ) {
//     console.log(i);
// }

// }


let number = + prompt("Enter any number for table:")

for(let i=1;        i <=10;     i++){
// 4 X 1 = 4    
// console.log(number + " X " + i +" = "+ number*i); // Concatenation
console.log(`${number} X ${i} = ${number * i}`);//Interpolation
}


//using while loop print  even number if number is even and odd number if number is odd
// from 1 to 10


// odd
//even
//odd
//even
//odd
//even
//odd
//even
//odd



//while loop


// initialization;  
// condition; 
// increment/decrement



// let i =10;

// while(10 > 5){

// console.log(i)

//     i--;
// }


// nahi chle ga
// 5 times chle ga
// chle ga
// chlta hi rahe ga






// let i=1;
// while(i<=10)
// {
//     if (i%2!=0) {
        
//         console.log(i);
//         i++;
//     }else{
       
//         i++;//i=8
//         continue;//skip the odd numbers
//     }
   
//  }

// let i=12;
// while(i<=10)
// {
//    console.log(i);
//    i++;
   
//  }



// let  h = 1;
// while(h > 6){
//     console.log("hi");
//     h++;
// }



// let  h = 1;


// do{
//     console.log("hi");
//     h++;
// }while(h < 6)


//do while loop

// let i=12;
// do
// {
//    console.log(i);
//    i++;
   
//  }while(i<=10);


//functions
//defining a function
// function greet(){
//     console.log("Hello world")
// }














//invoke / call
// greet();

//returning function;
// function greetHi(){
//     return "Hi";
// }


// let greet=greetHi();//Hi
// console.log(greet);

//parameters
// function greetWithName(name){
//     console.log("Hi "+name);
// }

// //arguments
// greetWithName("Haris");
// greetWithName("Shehzad");
// greetWithName("Kabeer");


// function add(a,b){
// return a+b;

// }

// let c=add(5,5);//10
// console.log(c)

// console.log(add(25,5))

//arrow function
// let addition=(a,b)=>a+b;
// addition(5,5);


//arrrays (collection of elements/values)
// let students=["Ali","Ahmed","Haris","Kabeer","Shehzad"];
// let employees=["Ali","Ahmed","Haris","Kabeer","Shehzad"];
// let Dishes=["Biryani","Qorma","Karahi","Handi","Pulao","Kabab"];

// index = 0-4
// length = 5
// console.log(students.length)
// console.log(students[3]);
// for(let i=0;i<students.length; i++){

//     // document.write("Name => "+students[i] +"<br>");
//     document.write(`Name => ${students[i]} <br>`);//string interpolation
// }

// function printArray(arr,heading){
//     for(let i=0; i<arr.length;i++){
//         // age +"years old" => `${age} years old`
//         document.write(`${heading +" "+ (i+1)}  : ${arr[i]}<br>`);
//     }
// }

// printArray(students,"Students");
// printArray(employees,"Employees");  
// printArray(Dishes,"Dishes");
// let students=["Ali","Ahmed","Haris","Kabeer","Shehzad"];

// push insert an element at last index of an array and returns the new length of an array
// console.log(students.push("Javed"));
// console.log(students);

// //pop removes an element from last index of an array and returns the removed element.
// console.log(students.pop());//Javed
// console.log(students);

//unshift add at start
// console.log(students.unshift("Owais")) //6
// console.log(students)

// //shift removes from start
// console.log(students.shift())//Owais
// console.log(students)

//splice
//              start index, no of elements to be removed, elements to be inserted
// students.splice(2               ,1                               );
// students.splice(2               ,2           ,"Haris Naseer" ,"Owais"                 );
// console.log(students)
//mutable -> can be changed
//immuatable => cannot be changed
//slice
// let goodStudents=students.slice(3,5);//start index,end length
// console.log(goodStudents)
// console.log(students)

// let students=["Ali","Ahmed","Haris","Kabeer","Shehzad"];
// //map
// let respectedStudents=students.map((stud)=>{   return "Mr."+stud });
// let lowerCaseStudents=students.map((stud)=>{   return stud.toLowerCase() });
// console.log(respectedStudents)
// console.log(lowerCaseStudents)

//includes returns true or falsse

//filter
// let filteredStudents=students.filter(
//     (student)=>{
//         if(student.includes("A")){
//             return student;
//         }
//     }
// )
// console.log(filteredStudents)

//find
//reduce
//sort
//reverse
//join
//split
//objects

// let person={
//     name:"Haris",
//     age:24,
//     isPakistani:true,
//     hobbies:["coding","reading","gaming"],
//     // address:{
//     //     city:"Karachi",
//     //     country:"Pakistan"
//     // },
   
// }
// person.hobbies[1]="writing";
// console.log(person.hobbies[1]);
// // console.log(person.address.country);//. notation
// // console.log(person['address']['country']);//index notation

// //for in loop
// for(let key in person){
//     console.log(key+" : "+person[key]);
// }



//search functionality - in other file

//dom



//es6
//asychronous programming
//api

//regexp
//web worker
//minification