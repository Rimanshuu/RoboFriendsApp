import {  useState, useEffect } from "react";
import 'tachyons';
import { useDebounce } from "./custom-hooks/useDebounce";
import SearchBox from './SearchBox';
import CardList from "./CardList";




function App() {
    const [input, setInput] = useState ('');
    const [robotArray, setRobotArray] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    const debouncedInput = useDebounce(input);

     useEffect (() => {
        fetch(`https://dummyjson.com/users/search?q=${debouncedInput}`)
        .then(response => response.json())
        .then(data => {
            setRobotArray(data.users)
            setLoadingState(false)
     })
    }, [debouncedInput]);

    // const filteredRobotArray = robotArray.filter((robot) => {
    //     return(
    //         robot.name.toLowerCase().includes(input.toLowerCase())
    //     );
    // })
    

    if (loadingState) {
        return (
            <div className = 'tc'>
                <h1>LOADING</h1>
            </div>
        );

    } else {
        return (
            <div className = 'tc'>
                    <h1 className  = '-m'>RoboFriends</h1>
                    <SearchBox setInput = {setInput}/>
                    <CardList robots = {robotArray}/>
            </div>
        );
    }
}

export default App;