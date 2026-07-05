//import React from 'react';
import Card from "./Card";

// const CardList = ({ robots }) => {
//     const CardArray =  robots.map( (robot, i) => {
//         return  (
//         <Card  
//             key = {i}  // the 'key' here is a unique key property: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
//             id={robots[i].id} 
//             name={robots[i].name} 
//             email={robots[i].email}
//         /> 
//         //Remember that: Key prop should have something that doesn't change, eg 'i' can change if array items gets moved, so better key in our case would be something unique like 'id'
//         );
//     } )
//         return (
//             <div>
//                 {CardArray}
//             </div>
//     )
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Now better way to do this would be, instead of storing it into a variable 'CardArray' then returning that variable, just return it as jsx as shown below


const CardList = ({ robots }) => {

    if (robots.length === 0) {
        return(
            <h1 className='status-message'>Sorry, no results found :(</h1>
        );
    } else {
        return (
            <div className='card-list'>
                {
                    robots.map((robot) => {
                        //console.log(robot, i);
                        return(
                            <Card 
                            key = {robot.id}
                            id = {robot.id}
                            name = {`${robot.firstName} ${robot.lastName}`}
                            email = {robot.email}
                            /> 
                        );
                    })
                }
            </div>
        )
    } 
}


export default CardList;
