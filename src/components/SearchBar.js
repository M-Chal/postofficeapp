import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../styles/Search.css';

function SearchBar({setSearch, search}) {

    const submitForm = (e) =>{
        /*Preventing default refresh on submit*/
        e.preventDefault();
        /*Calling the search function from Props, fetchPostOffice() from App.js */
        search();
    }

    return (
        <div className="search-Container">
            <form onSubmit={submitForm}>
                <TextField className="InputField" id="outlined-search" label="Enter Destination" type="search" variant="outlined" onChange={(e) => setSearch(e)} />
            </form>
        </div>
    )
}

export default SearchBar
