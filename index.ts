#! /usr/bin/env node
import inquirer from "inquirer";
const answar = await inquirer . prompt([{ message: " Enter first number", type : "number",name:"firstNumber"},
{message:"Enter second number",type:"number",name:"secondNumber"},
{message:"select one of the operators to perform operation",
type:"list",
name : "operators" ,
choices:["Addition" , "subtraction", "multiplication", "Division"],
},
]);

// conditinol statement
if(answar.operators === "Addition") {
    console.log(answar.firstNumber + answar.secondNumber);}
else if (answar.operators === "subtraction"){
    console.log(answar.firstNumber - answar.secondNumber);
}else if (answar.operators === "multiplication"){
    console.log(answar.firstNumber * answar.secondNumber);
}
else if (answar.operators === "Division"){
    console.log(answar.firstNumber / answar.secondNumber);
}else{
    console.log("please select valid operators")
}
    
