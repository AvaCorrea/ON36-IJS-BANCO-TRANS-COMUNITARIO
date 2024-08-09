export interface Account {
    assignedCustomerId: String,
    balance: Number,
    transactionHistory: [],
    activeServices: []
}

export interface SavingsAccount extends Account {
    interestRate: Number
}

export interface CheckingAccount extends Account {
    specialCheckLimit: Number
}
