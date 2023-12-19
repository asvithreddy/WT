import c from "chalk"
//const chalk=require("chalk");
console.log(c.green("Hello world"))
console.log(c.red("Hello world - - - - -"))
console.log(c.blue.bgWhite.bold("hello chalk world _ _ _ "))
console.log(c.red("i am red line"+c.blue.underline.bold("with blue string")+"that becomes red again"))

