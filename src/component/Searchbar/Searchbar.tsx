import { Button, Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css"
import { search } from "../../contants";

interface SearchBar {
    setSearchValue: (value: string) => void;
    onSearchButtonClick: () => void
}

function Searchbar(props: SearchBar) {
    const { setSearchValue, onSearchButtonClick } = props;
    return (
        <div className="searchWrapper">
            <Container maxWidth="xl" className="searchContainer">
                <TextField
                    sx={{width: "300px"}}
                    id="input-with-icon-adornment"
                    placeholder="Search by mobile or customer"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                    onChange={(event: any) => setSearchValue(event.target.value)}
                    variant="outlined"
                />
                <Button variant="outlined" onClick={onSearchButtonClick}>{search}</Button>
            </Container>
        </div>
    )
}

export default Searchbar;