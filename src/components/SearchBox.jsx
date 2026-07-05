import React from "react";

// function fetchValue(event) {
//     const fetchedValue = event.target.value;   
// }

const SearchBox = ({setInput}) => {
    return (
        <div>
            <input
                className='search-input'
                type='search'
                placeholder='Search Robots'
                onChange={(event) => setInput(event.target.value)}
            />
        </div>
    );
}

export default SearchBox;