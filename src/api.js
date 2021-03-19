// Base URL
const baseURL = "https://api.rawg.io/api"
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

console.log(currentDate, lastYear, nextYear)

// Popular Games
const popularGames = `/games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${baseURL}${popularGames}`