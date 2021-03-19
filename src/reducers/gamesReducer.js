const initState = {
    popular: [],
    newGames: [],
    upcomingGame: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES" : 
            return {...state, popular: action.payload.popular}
        default : 
            return {...state}
    }
}

// Action creator

export default gamesReducer
