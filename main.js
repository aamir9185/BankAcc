class BankAccount{
    name;
    accountno;
    balance;
 constructor(name,accno,bal){
   this.name = name;
   this.accountno = accno;
   this.balance = bal;
}
}
const P1 = new BankAccount("Aamir",12342421,1000);
console.log(P1);