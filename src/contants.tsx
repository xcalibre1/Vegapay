import { Button } from "@mui/material";
import { formJsonKeyType } from "./global.type";

export const cards: Array<{title: string; icon: string; active: boolean}> = [
    {
        title: "Kit",
        icon: "",
        active: false
    },
    {
        title: "Personalised Sale",
        icon: "",
        active: false
    },
    {
        title: "Reissue",
        icon: "",
        active: false
    }
]

export const kitColumns = (buttonHandler: any, btnName: string)=> [
    { field: "customerName", headerName: "Customer Name", type: "string", width: 300 },
    { field: "cardNo", headerName: "Card No", type: "number", width: 300 },
    { field: "emailId", headerName: "Email Id", type: "email", width: 300 },
    { field: "mobileNo", headerName: "Mobile No", type: "number", width: 300 },
    {
        field: "actions",
        headerName: "Actions",
        renderCell: (params: any) => {
          return [
            <Button variant="contained" onClick={() => buttonHandler(params)}>{params.row.actions}</Button>

          ];
        },
        width: 300
      }
];

export const personalizedSalesColumns = (buttonHandler: any, btnName: string)=> [
  { field: "name", headerName: "Name", type: "string", width: 200 },
  { field: "programeName", headerName: "Programe Name", type: "text", width: 200 },
  { field: "customerId", headerName: "customerId", type: "text", width: 200 },
  { field: "cardNo", headerName: "Card No", type: "text", width: 200 },
  { field: "expiryData", headerName: "Expiry Date", type: "text", width: 200 },
  { field: "activationData", headerName: "Activation date", type: "text", width: 200 },
  {
      field: "actions",
      headerName: "Details",
      renderCell: (params: any) => {
        return [
          <Button variant="contained" onClick={() => buttonHandler(params)}>{params.row.actions}</Button>

        ];
      },
      width: 200
    }
]

export const reissueColumns = (buttonHandler: any, btnName: string)=> [
  { field: "kitNo", headerName: "Kit No", type: "string", width: 200 },
  { field: "name", headerName: "Name", type: "text", width: 200 },
  { field: "programeName", headerName: "Programe Name", type: "text", width: 200 },
  { field: "customerId", headerName: "customerId", type: "text", width: 200 },
  { field: "cardNo", headerName: "Card No", type: "text", width: 200 },
  { field: "expiryData", headerName: "Expiry Date", type: "text", width: 200 },
  { field: "activationData", headerName: "Activation date", type: "text", width: 200 },
  {
      field: "actions",
      headerName: "Details",
      renderCell: (params: any) => {
        return [
          <Button variant="contained" onClick={() => buttonHandler(params)}>{params.row.actions}</Button>

        ];
      },
      width: 200
    }
]

export const rows = [
  {
    id: 1,
    customerName: "Damien",
    cardNo: 2523456,
    emailId: "jhguh@gmail.com",
    mobileNo: 7009508908,
    actions: "create Account",
  },
  {
    id: 2,
    customerName: "Damien",
    cardNo: 2523456,
    emailId: "jhguh@gmail.com",
    mobileNo: 7009508908,
    actions: "create Account",
  }
]
export const createAccountformJson: formJsonKeyType = {
    "Create Account": {
        formTitle: "Card Details",
        forms:[
          {
            type: "form",
            fields: [
              {
                element: "select",
                label: "Programe type",
                options: [
                  {
                    key: 1,
                    title: "corporate",
                    value: "corporate"
                  },
                  {
                    key: 2,
                    title: "All",
                    value: "All"
                  }
                ],
                width: "100%",
                id: "programeType"
              },
              {
                element: 'input',
                id: "programeName",
                type: "string",
                label: "Programe Name",
                width: "100%"
              },
              {
                element: 'input',
                id: "corporateName",
                type: "string",
                label: "Corporate Name",
                width: "100%"
              }
            ]
          }
        ]
      },
    "View": {
      formTitle: "View",
        forms:[
          {
            type: "form",
            fields: [
              {
                element: 'input',
                id: "customerName",
                type: "string",
                label: "Customer Name",
                width: "100%",

              },
              {
                element: 'input',
                id: "cardNo",
                type: "string",
                label: "Card Number",
                width: "100%"
              },
              {
                element: 'input',
                id: "emailId",
                type: "string",
                label: "emailId",
                width: "100%",

              },
              {
                element: 'input',
                id: "mobileNo",
                type: "string",
                label: "Mobile Number",
                width: "100%"
              }
            ]
          }
      ]
    }  
};

export const cardDetailsFormJson: formJsonKeyType = {
  "View": {
    formTitle: "Card Details",
    forms:[
      {
        type: "form",
        fields: [
          {
            element: 'input',
            id: "customerId",
            type: "text",
            label: "customer Id",
            width: "100%"
          },
          {
            element: 'input',
            id: "nameOnCard",
            type: "text",
            label: "Name on Card",
            width: "100%"
          },
          {
            element: 'input',
            id: "cardNo",
            type: "text",
            label: "Card No",
            width: "100%"
          },
          {
            element: 'input',
            id: "expiryDate",
            type: "date",
            label: "Expiry date",
            width: "100%"
          },
          {
            element: 'input',
            id: "activationDate",
            type: "date",
            label: "Activation date",
            width: "100%"
          }
        ]
      }
    ]
  }
};

export const reissueFormJson = {
  "View": {
      formTitle: "Wallet Details",
      forms:[
        {
          type: "form",
          fields: [
            {
              element: 'input',
              id: "customerId",
              type: "text",
              label: "customer Id",
              width: "100%"
            },
            {
              element: 'input',
              id: "nameOnCard",
              type: "text",
              label: "Name on Card",
              width: "100%"
            },
            {
              element: 'input',
              id: "oldCardNo",
              type: "text",
              label: "Old Card No",
              width: "100%"
            },
            {
              element: 'input',
              id: "kitNumber",
              type: "date",
              label: "Kit Number",
              width: "100%"
            },
            {
              element: 'input',
              id: "cardNo",
              type: "date",
              label: "Card No",
              width: "100%"
            },
            {
              element: 'input',
              id: "expiryDate",
              type: "date",
              label: "Expiry date",
              width: "100%"
            },
            {
              element: 'input',
              id: "activationDate",
              type: "date",
              label: "Activation date",
              width: "100%"
            },
            {
              element: 'input',
              id: "reason",
              type: "date",
              label: "reasonForReIssuance",
              width: "100%"
            }
          ]
        }
      ]
    }
};


export const SEARCH_URL = "https://prod-api.vegapay.tech/forex/account/search";

export const headers = {
  'Authorization': 'eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkZWFlNTllMi04ODRhLTRiOGQtOTAxOC1lMDdhMWNlYzgzN2IiLCJldmVudF9pZCI6IjBlMzFiNWZiLWEyZDItNGQ1Yi1hYmIyLWU2YWNmODYyYTMwNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODg5NzUwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg5MTU3MzcwLCJpYXQiOjE2ODkwNzA5NzAsImp0aSI6ImUyOTc0ZDJlLWFkOTctNDEyMi04NTU2LWFhYjg4N2NmNmVjYSIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiJkZWFlNTllMi04ODRhLTRiOGQtOTAxOC1lMDdhMWNlYzgzN2IifQ.RPaKVvKM70trZWzmAZgR4IqOLoZ47O3ekn8rFJZYCPoCv2Zn_YUE5XqdakPVKCjD7C9xre3952RMTmC-xvi5rkJsEupkytKuhHL9YDuRUbVJ5I09HC3xJFgBV3YRVYmP65lPyOUxtjxpB_sjWCdm2r-wdFkNtALDQeTt2VmY_DBx4IroJeTITMLcOmK1W3YlfmW2DDaaqVixmUAuEdPLecRn1j2DA2KU5wl8k-L062o-qFeO8p01PFhd1zYaA-k5fAURm01A74U6KVEvv6A2cxHRuZuaTADx_iws40dM9Gwv8vsfl189_EskTCIghgu9VProT5Fe1009WESo36DsZQ' 
}

export const body = {
  value: "",
  branchId: "4ff819ab-00ea-45b8-9544-205407c0680c",
  page: 0,
  pageSize: 50 
}


export const formJsonObj: any = {
  "Kit": createAccountformJson,
  "Personalised Sale": cardDetailsFormJson,
  "Reissue": reissueFormJson
};


export const newCardSales= "New Card Sales";
export const issueNewcard = "Issue new card";
export const search = "Search"