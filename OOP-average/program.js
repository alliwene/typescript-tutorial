"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oop_math_1 = require("./oop_math");
const oop_message_1 = require("./oop_message");
// class Program
//     {
//         static Main()
//         {
let math = new oop_math_1.OOP_Math();
let numberArray = math.CollateNumbers(5);
let average = math.CalculateAverage(numberArray);
oop_message_1.OOP_Message.DisplayMessage(4, average, numberArray);
//     }
// }
// Program.Main()
