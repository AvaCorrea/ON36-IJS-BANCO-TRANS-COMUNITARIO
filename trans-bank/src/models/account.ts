export interface AccountInterface {
    accountId: string
    assignedCustomerId: string,
    balance: number,
    transactionHistory: [],
    activeServices: []
}

export interface SavingsAccountInterface extends AccountInterface {
    interestRate: number
}

export interface CheckingAccountInterface extends AccountInterface {
    specialCheckLimit: number
}
