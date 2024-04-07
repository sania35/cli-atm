#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin :",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Correct pin code!"));
}
else {
    console.log(chalk.red(`Incorrect pin code!`));
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "check balance", "Fast Cash"],
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount you want to withdraw:",
            type: "number",
        }
    ]);
    if (amountAnswer.amount < myBalance) {
        myBalance -= amountAnswer.amount;
        console.log(chalk.yellowBright(`your remaining balance is: ${myBalance}`));
    }
    else {
        console.log(chalk.red("Insufficient balance"));
    }
}
else if (operationAns.operation === "check balance") {
    console.log(chalk.blueBright(`your current balance is ${myBalance}`));
}
else if (operationAns.operation === "Fast Cash") {
    let fastCash = await inquirer.prompt([
        {
            name: "FastOption",
            message: "How much amount you want to withdraw?",
            type: "list",
            choices: ["1000", "2000", "5000", "10000"]
        }
    ]);
    if (fastCash.FastOption === "1000") {
        myBalance -= fastCash.FastOption;
        console.log(chalk.grey(`Your remaining balance is ${myBalance}.`));
    }
    else if (fastCash.FastOption === "2000") {
        myBalance -= fastCash.FastOption;
        console.log(chalk.grey(`Your remaining balance is ${myBalance}.`));
    }
    else if (fastCash.FastOption === "5000") {
        myBalance -= fastCash.FastOption;
        console.log(chalk.grey(`Your remaining balance is ${myBalance}.`));
    }
    else if (fastCash.FastOption === "10000") {
        myBalance -= fastCash.FastOption;
        console.log(chalk.grey(`Your remaining balance is ${myBalance}.`));
    }
    else {
        console.log(chalk.redBright("Invalid"));
    }
}
