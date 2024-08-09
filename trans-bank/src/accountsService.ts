import { CheckingAccount } from "./checkingAccount"; 
import { SavingsAccount } from "./savingsAccount";

class AccountsService {

    crypto = require("crypto");

    createNewCheckingAccount(
        assignedCustomerId: string,
        balance: number,
        transactionHistory: [],
        activeServices: [],
        specialCheckLimit: number
    ) {
        new CheckingAccount(
            crypto. randomUUID(),
            assignedCustomerId,
            balance,
            transactionHistory,
            activeServices,
            specialCheckLimit
        )
    }

    createNewSavingsAccount(
        assignedCustomerId: string,
        balance: number,
        transactionHistory: [],
        activeServices: [],
        interestRate: number
    ) {
        new SavingsAccount(
            crypto. randomUUID(),
            assignedCustomerId,
            balance,
            transactionHistory,
            activeServices,
            interestRate
        )
    }
}