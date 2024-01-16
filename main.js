class BankAccount{
    name;
    accountno;
    balance;
 constructor(name,accno,bal){
   this.name = name;
   this.accountno = accno;
   this.balance = bal;
}
printInfo(){
   console.log(`Your Name ${this.name} \nYour Account No ${this.accountno} \nYour Current Balance ${this.balance} \n`)
}
depositeAmount(amount){
   if(amount > 0){
     this.balance += amount;
     console.log(`Your current balance is ${this.balance} \n`);
   }else{
      console.log("Enter a valid amount");
   }
}

withdrawAmount(amount) {
   if (amount > 0 && amount <= this.balance) {
     this.balance -= amount;
     console.log(`Withdrawal of ${amount} successful.`);
   } else {
     console.log('Invalid withdrawal amount or insufficient funds.');
   }
 }



}
const P1 = new BankAccount("Aamir",12342421,1000);
P1.printInfo();
P1.depositeAmount(1000);
P1.withdrawAmount(500);
P1.withdrawAmount(10000)