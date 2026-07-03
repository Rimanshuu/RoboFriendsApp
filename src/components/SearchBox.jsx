import React from "react";

// function fetchValue(event) {
//     const fetchedValue = event.target.value;   
// }

const SearchBox = ({setInput}) => {
    return (
        <div className = 'pa3'>
            <input 
                className = 'tc pa3 ba b--green bg-lightest-blue'
                type = 'search' 
                placeholder = "Search Robots" 
                onChange = {(event) => setInput(event.target.value)}
            />
        </div>
    );
}

export default SearchBox;