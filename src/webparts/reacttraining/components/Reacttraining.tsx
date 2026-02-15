import * as React from 'react';
import styles from './Reacttraining.module.scss';
import type { IReacttrainingProps } from './IReacttrainingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import FormData from './FormFile';
import CounterApp from './ReactHooks/UseStateHooks';
const Reacttraining:React.FC<IReacttrainingProps>=(props)=>{

  //variables declaration

  //const -> const is a constant means it is non volatile that can not be updated after declaration.

  const a=90;
 console.log(a);
 //let -> let is volatile means it can be update after declaration.

 let b=10;
 console.log(10); //b=10
 //comparsion b/w a and  b
 if(a>b){
  console.log("hello vijay");
 }
 else if(b>a){
console.log("Hello rami");
 }
 else{
  console.log("Void");
 }
 //-----------********--------
 b=9000;
 console.log(b);///9000
 if(a>b){
  console.log("hello vijay");
 }
 else if(b>a){
console.log("Hello rami");
 }
 else{
  console.log("Void");
 }

 //-----******String******----

 let FirstName="Vijay";
 let lastName="Thapak";
 console.log(FirstName+" "+lastName); //VijayThapak
 console.log(FirstName.concat(" "+lastName));
 //you are creating a search functionaltion on sharepoint list 
 console.log(FirstName.toLowerCase().includes("vijay"));//true otherwise you will get false

 //toLocale string
 let date=new Date();
 console.log(date.toLocaleString("en-In"));
 let money=2500;
 console.log(money.toLocaleString("en-In",{style:"currency",currency:"INR"}));

//  -----*****---conversion******------
let num1 ='10';
let num2 =10;
// let result=parseInt(num1)+num2
console.log(parseInt(num1)+num2);//1010-> 20
//-----***number to string---*****
let str=num2.toString();
console.log(typeof str); //it will give you interger //15/02/2026, 15-02-2026 
console.log(Boolean(str));//string
let flt=parseFloat(str);
console.log(flt.toFixed(2)+" "+ typeof flt); //5.00

//array 
let fruits=["Apple","Mango","Banana","Papaya","Manna"];
console.log(fruits);
console.log(fruits.length);//4
///****forech loop */
fruits.forEach((value)=>{
  console.log(value);
});
//0-Apple,1-Mango,2-Banana,3-Pappay
//for Loop

for (let i=0;i<fruits.length;i++)
{
  console.log("*****I am for loop***** "+fruits[i]); //iteration Apple, Mnaage
}

//do loop

let i=0;
while(i<fruits.length){
  console.log(fruits[i]);
  i++;
}

//do while 
let dowhile_=0;
do{
  console.log(fruits[dowhile_]);
  dowhile_++;
}
while(dowhile_<fruits.length);

//array function-
console.log(fruits.indexOf("Banana"));
console.log(fruits.lastIndexOf("Banana"));
// Slice
let newFruits=fruits.slice(1,4);
console.log(newFruits); //mango, b,p
//splice
// fruits.splice(2,1);
// console.log(fruits);

console.log(fruits.includes("Apple"));

//find 
let result=fruits.find(fruit=>
  fruit.startsWith("M")
  
);
console.log(result);

//filter 
let newArray=fruits.filter(fruit=>fruit==="Mango"
);
console.log(newArray);

fruits.push("Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
//conversion of array into string
console.log(fruits.join(","));

//copy of array called spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
console.log(...arr1,...arr2);
return(
  <>
  
  <h3 className={styles.h2}>hello world</h3>
  <FormData/>

  {/* Map Function */}
  {fruits.map((item,index)=>(
    <p key={index}>{item}</p>
  ))}
  <br/>
  <hr/>
<CounterApp/>
  
  </>
  
)
}
export default Reacttraining;// variables, lopops, array , string, hooks,routes,redux , 