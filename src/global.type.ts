type ACCOUNT = {
        id: number;
        customerId: string,
        branchId: string;
        programId: string;
        primaryCardId: null,
        walletId: string;
        status: string;
        corporateCustomerId: string;
        accountLimit: number,
        programName: string
        branchName: string
        checkerMakerId: string
        checkerMakerStatus: string
}

type CARD = {
    accountId: string;
    cardNumber: string;
    expiryDate: string;
    createdAt: string
    vendorCardNumber: string
}

type RECORD = {
    account: ACCOUNT;
    card: CARD;
    submWallets: any;
    customer: any
}

export interface ApiResponseType {
    numberOfItems: number;
    pageNumber: number;
    totalItems: number;
    totalPages: number;
    records: RECORD[]
}

export type INPUT = {
    element: string;
    id: string;
    type: string;
    label: string,
    width: string
}
export type DROPDOWN = {
    element: string;
    id: string;
    options: {[key: string]: string | number}[]
    label: string,
    width: string
}
export type FORM = {
    type: string;
    fields: (DROPDOWN | INPUT)[]
}

export interface formJsonType {
    formTitle: string;
    forms: FORM[]
} 

export interface tableDataType {
    cols: any;
    rows: any[];
}

export type cardElement = {title: string; icon: string; active: false}