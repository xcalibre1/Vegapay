import CardSaleType from "../CardSaleType/CardSaleType"
import { body, cards, createAccountformJson, formJsonObj } from "../../contants"
import Searchbar from "../Searchbar/Searchbar";
import CardDetails from "../CardDetails/CardDetails";
import { useEffect, useState } from "react";
import { tableDataSet } from "../../DataSetHelper";
import axios from "axios";
import { SEARCH_URL, headers } from "../../contants";
import { ApiResponseType, formJsonType, tableDataType } from "../../global.type";
function SearchApi(body: any, setPostData: (data: any) => void) {
    axios.post(SEARCH_URL, body, { headers: headers }).then((response) => {
        setPostData(response.data);
    });

}
function HomePage() {
    const [value, setValue] = useState<string>();
    const [tableData, setTableData] = useState<tableDataType>();
    const [postData, setPostData] = useState<ApiResponseType>();
    const [cardType, setCardType] = useState<string>("Kit");
    const [formJson, setFormJson] = useState<formJsonType>(createAccountformJson);


    useEffect(() => {
        SearchApi(body, setPostData);
    }, [])

    useEffect(() => {
        if (cardType)
            setFormJson(formJsonObj[cardType as string])
    }, [cardType])

    useEffect(() => {
        if (postData) {
            setTableData(tableDataSet(cardType!, postData!, value));
        }
    }, [cardType, postData, value])

    console.log(tableData)

    const onSearchButtonClick = () => {
        const newRequestBody = { ...body, value: value };
        SearchApi(newRequestBody, setPostData);
    }

    console.log(tableData);



    return (
        <div style={{ marginTop: "30px" }}>
            <CardSaleType cards={cards as Array<{ title: string; icon: string; active: false }>} setCardType={(type: string) => setCardType(type)} />
            <Searchbar setSearchValue={setValue} onSearchButtonClick={onSearchButtonClick} />
            {tableData ? <CardDetails tableData={tableData} cardType={cardType} formJson={formJson} /> : null}
        </div>
    )
}
export default HomePage