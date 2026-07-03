import { useState, useEffect } from "react";
import "tachyons";
import { useDebounce } from "../hooks/useDebounce";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { Cache } from "../utils/cache";

function App() {
    const [input, setInput] = useState("");
    const [robotArray, setRobotArray] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const debouncedInput = useDebounce(input);
    
    // true while the user is still typing (input hasn't settled to debouncedInput yet)
    const isSearching = input !== debouncedInput;

    // synchronous cache lookup during render — avoids calling setState inside useEffect for cached results
    const cachedResult = Cache.has(debouncedInput) ? Cache.get(debouncedInput) : null;

    // only runs a network fetch when there's no cached result for the current debounced input
    useEffect(() => {
        if (cachedResult) return;

        fetch(`https://dummyjson.com/users/search?q=${debouncedInput}`)
            .then((response) => response.json())
            .then((data) => {
                Cache.set(debouncedInput, data.users);
                setRobotArray(data.users);
                setLoadingState(false);
            });
    }, [debouncedInput, cachedResult]);

    // prefer cached result; fall back to robotArray (populated by the last fetch)
    const displayedRobots = cachedResult || robotArray;

    if (loadingState) {
        return (
        <div className="tc">
            <h1>LOADING</h1>
        </div>
        );
    } else {
        return (
        <div className="tc">
            <h1 className="-m">RoboFriends</h1>
            <SearchBox setInput={setInput} />
            <Scroll> 
                {
                    isSearching? <h1>seraching ...</h1>:<CardList robots={displayedRobots} />
                }    
            </Scroll>
        </div>
        );
    }
}

export default App;