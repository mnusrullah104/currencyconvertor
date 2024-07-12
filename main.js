import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.91,
    GBP: 0.76,
    INR: 74.77,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Entrer from currency",
        choices: ["USD", "EURO", "GBP", "INR", "PKR"]
    }, {
        name: "to",
        type: "list",
        message: "Entrer to currency",
        choices: ["USD", "EURO", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Amount"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
