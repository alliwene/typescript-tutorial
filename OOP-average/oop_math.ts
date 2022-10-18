import { OOP_Message } from "./oop_message";
import * as readline from "readline-sync";

export class OOP_Math {
  // public testFunction(){

  // }
  public CollateNumbers(numberCount: number) {
    let numberArray: number[] = [];

    for (let count = 1; count <= numberCount; count++) {
      //Prompt the user to input a number between 95 and 121
      OOP_Message.DisplayMessage(0);
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
          OOP_Message.DisplayMessage(3, number); //Print a message to the user
          count -= 1;
        }
      } catch (error) {
        console.log(error);
        count -= 1;
      }
    }
    return numberArray;
  }

  private CalculateSum(numbers: number[]) {
    let sum = 0;
    numbers.forEach((number: number) => {
      sum += number;
    });
    return sum;
  }

  public CalculateAverage(numbers: number[]) {
    let sum = this.CalculateSum(numbers);
    return sum / numbers.length;
  }
}
