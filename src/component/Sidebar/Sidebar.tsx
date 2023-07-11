import { List, ListItem, IconButton, ListItemText, Box, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import DraftsIcon from '@mui/icons-material/Drafts';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./Sidebar.css";

function SideBar({routes}: any) {
    const [activeRouteArray, setActiveRouteArray] = useState<Array<{title: string; active: boolean}>>([]);


    const buttonClickHandler = (tabIndex: number) => {
        activeRouteArray[tabIndex].active = true;
        const newArray = activeRouteArray.map((item, index) =>
        {
            if(index === tabIndex){
                return {...item, active: true};
            }
            return {...item, active: false};
        });
        setActiveRouteArray(newArray);
    }

    useEffect(() => {
        setActiveRouteArray(routes);
    }, [routes])

    return (
        <div className="sidebarWrapper" style={{backgroundColor: "black", height: "100vh", width: "15%"}}>  
             <Box sx={{ width: '100%', maxWidth: 700, color: 'background.paper' }}>
                <div className="titleText">
                    Vegapay
                </div>
                <List>
                        {activeRouteArray.map((element, index) => {
                        return (<ListItem
                            key={element.title}
                            disablePadding
                            sx={{
                                bgcolor: element.active ? "#314154": "black",
                                "border-left": element.active ? "2px solid #0288d1" : "0px"
                            }}
                            >
                            <ListItemButton sx={{display: "flex", justifyContent: "space-between"}} onClick={() => buttonClickHandler(index) }>
                            <ListItem sx={{width: "20%"}}>
                                <DraftsIcon />
                            </ListItem>
                            <ListItem sx={{width: "80%"}}>
                                <ListItemText primary={`${element.title}`} />
                            </ListItem>
                            </ListItemButton>
                        </ListItem>)
})}
                </List>
            </Box>   
        </div>
    )
}

export default SideBar;