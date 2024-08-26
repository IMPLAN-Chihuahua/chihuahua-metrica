import { Clear, Search } from "@mui/icons-material";
import { debounce, IconButton, InputAdornment, TextField } from "@mui/material";
import { useCallback, useRef, useState } from "react";


const SearchBar = ({ setSearch }) => {
    const textRef = useRef(null)
    const [searching, setSearching] = useState(false);

    const handleClear = () => {
        textRef.current.value = '';
        setSearch('')
        setSearching(false);
    };

    const handleChange = useCallback(debounce(e => {
        setSearching(true);
        setSearch(e.target.value);
    }, 500), []);

    return (
        <TextField
            inputRef={textRef}
            InputProps={{
                startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>),
                endAdornment: (
                    searching &&
                    <IconButton
                        onClick={handleClear}
                    >
                        <Clear />
                    </IconButton>
                )
            }}
            name='searchQuery'
            fullWidth
            onChange={handleChange}
            placeholder='Buscar indicadores por nombre'
        />
    );
}


export default SearchBar;