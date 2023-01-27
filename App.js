//const parcer=require(".Parcer.js");
//const text=require("./text.txt");
const Parcer = require("./Parcer");
var text="D:\STEP\NodeJS\Projects\Parser\text.txt";

let newPacer=new Parcer(text);

newPacer.Result();