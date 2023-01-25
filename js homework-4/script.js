let accountname = 'alex'
let accBalance = 10000
let userName = prompt("What's your name?").toLocaleLowerCase().trim() 


if (userName == accountname) {

    let account = prompt('Account number') .trim() 
    

    if(account == 7777){
        console.log(`Welome, your balance is: ${accBalance}`);

        let money = prompt('Withdraw volume: ') .trim()
    
        if(money <= accBalance) {
            console.log(`Withdrawal: ${money}, Balance: ${accBalance - money}`);
        } else {
            console.log("Not enough balance!");
        } 
    } else {
        console.log("No user found");
    }

} else (
    console.log("No user found")
)