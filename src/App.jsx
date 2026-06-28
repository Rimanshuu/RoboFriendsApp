import React, {  useState, useEffect } from "react";
import 'tachyons';
import SearchBox from './SearchBox';
import CardList from "./CardList";
//import { robots } from './robots';



function App() {
    const [input, setInput] = useState ('');
    const [robotArray, setRobotArray] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

     useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            setRobotArray(users)
            setLoadingState(false)
     })
    }, []);

    const filteredRobotArray = robotArray.filter((robot) => {
        return(
            robot.name.toLowerCase().includes(input.toLowerCase())
        );
    })
    

    if (loadingState) {
        return (
            <div className = ''>
                <h1>LOADING</h1>
            </div>
        );

    } else {
        return (
            <div className = 'tc'>
                    <h1 className  = '-m'>RoboFriends</h1>
                    <SearchBox setInput = {setInput}/>
                    <CardList robots = {filteredRobotArray}/>
            </div>
        );
    }
}

export default App;