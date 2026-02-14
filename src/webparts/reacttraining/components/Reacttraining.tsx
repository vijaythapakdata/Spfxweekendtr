import * as React from 'react';
import styles from './Reacttraining.module.scss';
import type { IReacttrainingProps } from './IReacttrainingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import FormData from './FormFile';
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
return(
  <>
  
  <h3 className={styles.h2}>hello world</h3>
  <FormData/>
  </>
  
)
}
export default Reacttraining;// variables, lopops, array , string, hooks,routes,redux , 