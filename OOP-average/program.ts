import { OOP_Math } from "./oop_math";
import { OOP_Message } from "./oop_message";

// class Program
//     {
//         static Main()
//         {
let math = new OOP_Math();
let numberArray = math.CollateNumbers(5)
let average = math.CalculateAverage(numberArray);
OOP_Message.DisplayMessage(4, average, numberArray);
//     }
// }

// Program.Main()
