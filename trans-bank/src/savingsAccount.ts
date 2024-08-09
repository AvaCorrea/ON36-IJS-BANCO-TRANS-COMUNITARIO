import { SavingsAccountInterface } from "./models/account";
//import { MoneyTransfer, Withdrawal } from "./models/transaction"; For future transaction implementation!

export class SavingsAccount implements SavingsAccountInterface {
    public accountId: string;
    public assignedCustomerId: string;
    public balance: number;
    public transactionHistory: [];
    public activeServices: [];
    public interestRate: number;

    constructor(
        accountId: string,
        assignedCustomerId: string,
        balance: number,
        transactionHistory: [],
        activeServices: [],
        interestRate: number
    ) {
        this.accountId = accountId;
        this.assignedCustomerId = assignedCustomerId;
        this.balance = balance;
        this.transactionHistory = transactionHistory;
        this.activeServices = activeServices;
        this.interestRate = interestRate;
    }

    getBalance() {
        return this.balance
    }

    changeBalance(amount: number) {
        this.balance += amount;
    }

    withdrawFromBalance(amount: number) {
        this.changeBalance(-amount)
        // Later add interaction with withdrawal transactions class and create a new transaction object!
    }

    depositToBalance(amount: number) {
        this.changeBalance(amount)
        // Later add interaction with deposit transactions class and create a new transaction object!
    }

}
