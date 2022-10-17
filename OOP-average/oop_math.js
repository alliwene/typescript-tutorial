"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OOP_Math = void 0;
const oop_message_1 = require("./oop_message");
const readline = __importStar(require("readline-sync"));
class OOP_Math {
    // public testFunction(){
    // }
    CollateNumbers(numberCount) {
        let numberArray = [];
        for (let count = 1; count <= numberCount; count++) {
            //Prompt the user to input a number between 95 and 121
            oop_message_1.OOP_Message.DisplayMessage(0, null, null);
            try {
                let number = 0;
                var input = readline.question(); //Accept the input
                number = Number(input == "" ? "0" : input); //Assign the input to the number variable
                if (number >= 95 && number <= 121) {
                    //Check if the input is within the specified range
                    //collate number here
                    numberArray[count - 1] = number;
                } //if the number is not within the range, it should prompt the user that the number is not within the range
                else {
                    oop_message_1.OOP_Message.DisplayMessage(3, number, null); //Print a message to the user
                    count -= 1;
                }
            }
            catch (error) {
                console.log(error);
                count -= 1;
            }
        }
        return numberArray;
    }
    CalculateSum(numbers) {
        let sum = 0;
        numbers.forEach((number) => {
            sum += number;
        });
        return sum;
    }
    CalculateAverage(numbers) {
        let sum = this.CalculateSum(numbers);
        return sum / numbers.length;
    }
}
exports.OOP_Math = OOP_Math;
