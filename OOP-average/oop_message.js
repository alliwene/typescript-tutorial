"use strict";
// let num1 = readline.question("Kindly input a number between 95 and 121: ");
// console.log(num1);
Object.defineProperty(exports, "__esModule", { value: true });
exports.OOP_Message = void 0;
class OOP_Message {
    static DisplayMessage(messageIndex, number, numberArray) {
        switch (messageIndex) {
            case 0:
                console.log(this.inputPrompt);
                break;
            case 1:
                console.log(this.greatThan100Message, number);
                break;
            case 2:
                console.log(this.lessThan100Message, number);
                break;
            case 3:
                console.log(this.numberErrorMessage, number);
                break;
            default:
                console.log(this.displayAverage, numberArray, number);
                break;
        }
    }
}
exports.OOP_Message = OOP_Message;
OOP_Message.inputPrompt = "Kindly input a number between 95 and 121"; //0
OOP_Message.greatThan100Message = "Average is %s and it is greater than 100"; //1
OOP_Message.lessThan100Message = "Average is %s and it is less than or equal to 100"; //2
OOP_Message.numberErrorMessage = "Sorry %s is not betwen 95 and 121"; //3
OOP_Message.displayAverage = "The average of %s is %s"; //4
