const fs = require('fs');
var rl = require('readline-sync');

const balance = Number(fs.readFileSync('./balance.txt', 'utf8'));

const withdrawOrDeposit = rl.question("Do you want to\n1) Withdraw\n2) Deposit\n3) Check Main Balance: ");

if (withdrawOrDeposit === '1' || withdrawOrDeposit === '2' ) {
    const change = Number(rl.question("Amount: "));

    if (isNaN(change)) {
        console.log("Sorry, your input was not a number.");
    } else {
        if (withdrawOrDeposit === '1') {
            const newBalance = balance - change;
            if (newBalance < 0) {
                console.log("Insufficient funds, you're poor.");
            } else {
                fs.writeFileSync('./balance.txt', "" + newBalance);
                console.log("Thanks for using Tom's Bank, your balance is: " + newBalance);
            }
        } else if (withdrawOrDeposit === '2') {
            const newBalance = balance + change;
            fs.writeFileSync('./balance.txt', "" + newBalance);
            console.log("Thanks for using Tom's Bank, your balance is: " + newBalance);
        } else if (withdrawOrDeposit === '3') {
            console.log("Your main balance is: " + balance);
        }
    }
    if (withdrawOrDeposit === "3") {
        console.log(balance)
    }
}else {
   console.log("Invalid choice. Please choose 1, 2, or 3.");
}