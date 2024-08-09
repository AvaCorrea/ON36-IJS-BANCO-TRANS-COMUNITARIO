export interface Transaction {
    linkedAccounts: [],
    status: Status,
    date: Date,
}

export interface MoneyTransfer extends Transaction {
    amount: number,
    sender: string,
    receiver: string,
    type: TransferType
}

export interface Withdrawal extends Transaction {
    amount: number
}

enum Status {
    Active,
    Inactive
}

enum TransferType {
    PIX,
    TED,
    TEF
}
