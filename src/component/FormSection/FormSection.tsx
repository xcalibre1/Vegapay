import { Button, Container, FormControl, MenuItem, Select, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import "./FormSection.css";
import { DROPDOWN, FORM, INPUT } from "../../global.type";
interface FormSectionProps {
    formTitle: string,
    formJson: FORM[]
    cancelBtnHandler: () => void;
    formData: { [key: string]: string | number }
}
function FormSection(props: FormSectionProps) {
    const { formTitle, formJson, cancelBtnHandler, formData } = props;

    const ElementPicker = (elementconfig: any) => {
        switch (elementconfig.element) {
            case "input": {
                return (
                    <TextField sx={{ width: "100%", margin: "10px" }} id="outlined-basic" label={elementconfig.label} type={elementconfig.type} variant="outlined" value={formData ? formData[elementconfig.id] : ""} />
                );
            }
            case "select": {
                const { options = [], label } = elementconfig;
                return (
                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select"
                            value={formData ? formData[elementconfig.id] : ""}
                            label={label}
                        >
                            {options.map((option: { [key: string]: string | number }) => <MenuItem value={option.value} >{option.title}</MenuItem>)}
                        </Select>
                    </FormControl>
                )
            }
            default: {
                return <div></div>
            }
        }
    }

    const renderForms = (fields: any) => {
        return (
            <div className="formFields">
                {fields.map((formElement: (DROPDOWN | INPUT)) => ElementPicker(formElement))}
            </div>
        )
    }

    return (
        <div className="formWrapper">
            <div className="formTitle">{formTitle}</div>
            <Container maxWidth="xl" className="formContainer">
                {formJson.map((form: FORM) => renderForms(form.fields))}
            </Container>
            <div className="footerButtons">
                <Button variant="outlined" sx={{ marginRight: "10px" }} onClick={cancelBtnHandler}>Cancel</Button>
                <Button variant="outlined">Submit</Button>
            </div>
        </div>
    )

}

export default FormSection;