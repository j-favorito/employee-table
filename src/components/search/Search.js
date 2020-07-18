import React from 'react';


function Search(props) {
    return (
        <>
            <form>
                <label>Search by last name:</label><br></br>
                <input
                    onChange={props.handleInputChange}
                    type="text"
                    name="search"
                    placeholder="Doe">
                </input>
                <button onClick={props.searchHandleClick}>Search</button>
            </form>

        </>
    );
}

export default Search;