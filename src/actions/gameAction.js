import axios from 'axios'
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api'

// Action Creator
export const loadGames = () => async (dispatch) => {
    // Fetch Axios
    const popularGameData = await axios.get(popularGamesURL())
    const upcomingGameData = await axios.get(upcomingGamesURL())
    const newGameData = await axios.get(newGamesURL())
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGameData.data.results,
            upcoming: upcomingGameData.data.results,
            new: newGameData.data.results
        }
    })
}

// 