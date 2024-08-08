import { TextField, Box } from '@mui/material'
import React, {useState} from 'react'

function SearchBar({onSearch}){
    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
        onSearch(event.target.value)
    }

    return (
        <Box width = "800px">
            <TextField
                label = "Search Items"
                variant = "outlined"
                fullWidth
                value = {searchTerm}
                onChange = {handleInputChange} 
            />
        </Box>
    )
}

export default SearchBar