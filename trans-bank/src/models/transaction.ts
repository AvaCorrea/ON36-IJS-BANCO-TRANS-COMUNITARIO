export interface Transaction {
    linkedAccounts: [],
    status: Status,
    date: Date,
}

export interface moneyTransfer extends Transaction {
    ammount: Number,
    sender: String,
    receiver: String,
    type: TransferType
}

export interface withdrawal extends Transaction {
    ammount: Number
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
