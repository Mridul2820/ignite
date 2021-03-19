import { useEffect } from 'react'

// Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gameAction";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
