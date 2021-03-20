import { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";

// Components
import Game from '../components/Game'

// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";

const Home = () => {
    // Setch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    // Get the data back
    const { popular, newGames, upcoming } = useSelector((state => state.games))

    return (
        <StyledGameList>
            <h2>Upcoming Games</h2>
            <StyledGames>
                {upcoming.map(game => (
                    <Game 
                        key={game.id}
                        name={game.name} 
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </StyledGames>
        </StyledGameList>
    )
}

const StyledGameList = styled(motion.div)`
    padding: 0rem 5rem;

    h2 {
        padding: 2rem 0rem;
    }
`

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem 2rem;
`

export default Home
