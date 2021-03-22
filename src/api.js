// Base URL
const baseURL = "https://api.rawg.io/api/"
const apiKey = `${process.env.REACT_APP_API_KEY}`

// Get Current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if(month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}

// Get Current day
const getCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}


// Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// Popular Games
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
// Upcoming Games
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
// New Games
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${baseURL}${popularGames}`
export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`
export const newGamesURL = () => `${baseURL}${newGames}`

// Game Details 
export const gameDetailsURL = (game_id) => `${baseURL}games/${game_id}`

// Game Screenshot URL
export const gameScreenshotURL = (game_id) => `${baseURL}games/${game_id}/screenshots`