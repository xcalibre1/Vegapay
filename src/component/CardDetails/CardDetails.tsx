import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import FormSection from "../FormSection/FormSection";
import { setFormValues } from "../../DataSetHelper";
import { formJsonType, tableDataType } from "../../global.type";

interface CardDetailType {
    tableData: tableDataType;
    cardType: string;
    formJson: formJsonType;
}

function CardDetails(props: CardDetailType) {
    const { tableData, cardType, formJson } = props;
    const [selectedActionData, setSelectedActionData] = useState();
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [formData, setFormData] = useState<{ [key: string]: string | number }>({});
    useEffect(() => {
        if (cardType && selectedActionData) {
            setFormData(setFormValues(cardType, selectedActionData))
        }
    }, [selectedActionData, cardType])

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
                    <FormSection formTitle={formJson.formTitle} formData={formData} formJson={formJson.forms} cancelBtnHandler={() => setModalVisible(false)} />
                </Modal>
            </Container>
        </div>
    )
}

export default CardDetails;