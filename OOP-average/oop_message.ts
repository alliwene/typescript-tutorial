// let num1 = readline.question("Kindly input a number between 95 and 121: ");
// console.log(num1);


export class OOP_Message {
  static readonly inputPrompt = "Kindly input a number between 95 and 121"; //0
  static readonly greatThan100Message =
    "Average is %s and it is greater than 100"; //1
  static readonly lessThan100Message =
    "Average is %s and it is less than or equal to 100"; //2
  static readonly numberErrorMessage = "Sorry %s is not betwen 95 and 121"; //3
  static readonly displayAverage = "The average of %s is %s"; //4

  public static DisplayMessage(messageIndex: number, number: number | null, numberArray: number[] | null) {
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
