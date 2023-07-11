import { Select, MenuItem } from "@mui/material";
import "./Navbar.css";
function Navbar({user}: any) {
    return (
        <div className="navbar">
            <div className="userInfo">
                <div className="userTime">
                    <span>Alpha User</span>
                    <span>Last Login: 20/05/2023 00:00:00</span>
                </div>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={""}
                    label="Age"
                    className="selectTag"
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >Log Out</MenuItem>
                </Select>
            </div>
            
        </div>
    )
}

export default Navbar;