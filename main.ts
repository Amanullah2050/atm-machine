import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

async function startATM() {
  let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your PIN:",
      type: "number"
    }
  ]);

  if (pinAnswer.pin === myPin) {
    let operationAns = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select an option:",
        type: "list",
        choices: ["withdraw", "check balance"]
      }
    ]);

    if (operationAns.operation === "withdraw") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter the amount to withdraw:",
          type: "number"
        }
      ]);

      let withdrawalAmount = Number(amountAns.amount);

      if (withdrawalAmount > myBalance) {
        console.log("You have insufficient Balance!");
      } else {
        myBalance -= withdrawalAmount;
        console.log("Withdrawal successful.");
        console.log("Your remaining balance is: " + myBalance);
      }
    } else if (operationAns.operation === "check balance") {
      console.log("Your balance is: " + myBalance);
    }
  } else {
    console.log("Incorrect PIN number");
  }
}

startATM();
