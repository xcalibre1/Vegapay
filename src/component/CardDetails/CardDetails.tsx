import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import FormSection from "../FormSection/FormSection";
import { setFormValues } from "../../DataSetHelper";
import { formJsonKeyType, formJsonType, tableDataType } from "../../global.type";
import { createAccountformJson } from "../../contants";

interface CardDetailType {
    tableData: tableDataType;
    cardType: string;
    formJson: formJsonKeyType;
}

function CardDetails(props: CardDetailType) {
    const { tableData, cardType, formJson } = props;
    const [selectedActionData, setSelectedActionData] = useState<any>();
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [formData, setFormData] = useState<{ [key: string]: string | number }>({});
    const [formkeyJson, setFormKeyJson] = useState<formJsonType>(createAccountformJson.View);
    hggjhggiu

    useEffect(() => {
        if (cardType && selectedActionData) {
            setFormData(setFormValues(cardType, selectedActionData));
        }
    }, [selectedActionData, cardType])

    useEffect(() => {
        if(selectedActionData && formJson) {
            const newFormJson = JSON.parse(JSON.stringify(formJson));
            setFormKeyJson(newFormJson[selectedActionData.row.actions])
        }
    }, [selectedActionData, formJson])

    return (
        <div className="tableWrapper">
            <Container maxWidth="xl" className="cardDetailsContainer">
                <DataGrid columns={tableData.cols((params: any) => {
                    setModalVisible(!isModalVisible);
                    return setSelectedActionData(params)
                }, "create Account")} rows={tableData.rows} sx={{ bgcolor: "white", height: "400px" }} />
                <Modal
                    open={isModalVisible}
                    onClose={() => setModalVisible(!isModalVisible)}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <FormSection formTitle={formkeyJson.formTitle} formData={formData} formJson={formkeyJson.forms} cancelBtnHandler={() => setModalVisible(false)} />
                </Modal>
            </Container>
        </div>
    )
}

export default CardDetails;