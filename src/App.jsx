import {  useState, useEffect, useRef } from "react";
import 'tachyons';
import { useDebounce } from "./custom-hooks/useDebounce";
//import { inCachedSearhes } from "./previousSearches";
import SearchBox from './SearchBox';
import CardList from "./CardList";




function App() {
    const [input, setInput] = useState ('');
    const [robotArray, setRobotArray] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    const debouncedInput = useDebounce(input);

    const cacheRef = useRef(new Map())

    // a funciton to get cached input value to we can use it inside the useEffect
    function getCachedInput(cache, input) {
        return cache.current.get(input)
    }

    // A funciton to add input value into the cache
    function setCachedInput (cache, input, result) {
        cache.current.set(input, result)
    }

    useEffect (() => {

        if (cacheRef.current.has(debouncedInput)) {
            //get input and results from cached results
            console.log("fetching from cache")

            setRobotArray(getCachedInput(cacheRef, debouncedInput))
            setLoadingState(false)

        } else{

            console.log("making api call")
            
            fetch(`https://dummyjson.com/users/search?q=${debouncedInput}`)
            .then(response => response.json())
            .then(data => {
                //add new debouncedInput to cache here
                setCachedInput(cacheRef, debouncedInput, data.users)
                setRobotArray(data.users)
                setLoadingState(false)
            })
        } 
    }, [debouncedInput]);

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