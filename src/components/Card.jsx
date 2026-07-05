//import React from "react";


const Card = ({id, name, email}) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${id}?200X200`} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
