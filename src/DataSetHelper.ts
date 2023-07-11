import { kitColumns, personalizedSalesColumns, reissueColumns } from "./contants";

export const tableDataSet = (tableType = "Kit", tableData: any, searchResult: any) => {
    const {records = []} = tableData;
    switch(tableType){
        case "Kit": {
            const rowsData = records.map((rowElement: any, index: number) => {
                const { account , customer, card } = rowElement || {};
                const { emailId = "--", fullName="--", mobileNumber = "--" } = customer || {};
                const { cardNumber="--" } = card || {};
                return {
                    id: index,
                    customerName: fullName,
                    cardNo: cardNumber,
                    emailId: emailId,
                    mobileNo: mobileNumber,
                    actions: account ? "View": "Create Account",
                    type: tableType
                }
            })
            return {
                rows: rowsData,
                cols: kitColumns
            }
        }
        case "Personalised Sale": {
            const rowsData = records.map((rowElement: any, index: number) => {
                const { account , customer, card } = rowElement || {};
                const { programName = "--" } = account || {};
                const { fullName="--", customerId } = customer || {};
                const { cardNumber="--" , expiryDate, createdAt } = card || {};
                return {
                    id: index,
                    name: fullName,
                    programeName: programName,
                    customerId: customerId,
                    cardNo: cardNumber,
                    expiryData: expiryDate,
                    activationData: createdAt,
                    actions: "View",
                    type: tableType
                }
            })
            return {
                rows: rowsData,
                cols: personalizedSalesColumns
            }
        }
        case "Reissue": {
            const rowsData = records.map((rowElement: any, index: number) => {
                const { account , customer, card } = rowElement || {};
                const { programName = "--" } = account || {};
                const { fullName="--", customerId } = customer || {};
                const { cardNumber="--" , expiryDate, createdAt, vendorCardNumber } = card || {};
                return {
                    id: index,
                    kitNo: vendorCardNumber,
                    name: fullName,
                    programeName: programName,
                    customerId: customerId,
                    cardNo: cardNumber,
                    expiryData: expiryDate,
                    activationData: createdAt,
                    actions: "View",
                    type: tableType
                }
            })
            return {
                rows: rowsData,
                cols: reissueColumns
            }
        }
    }
    
}

export const setFormValues = (tableType: string, rowData: any): any => {
    switch(tableType){
        case "Kit": {
            console.log("rowData", rowData)
            const {row} = rowData
            
            return {
                programeType: "",
                programeName: row.customerName,
                corporateName: row.customerName
            }
            
        }
    }
}   
