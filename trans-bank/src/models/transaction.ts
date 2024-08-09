export interface Transaction {
    linkedAccounts: [],
    status: Status,
    date: Date,
}

export interface MoneyTransfer extends Transaction {
    ammount: number,
    sender: string,
    receiver: string,
    type: TransferType
}

export interface Withdrawal extends Transaction {
    ammount: number
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
