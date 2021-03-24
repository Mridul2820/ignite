import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";

// Components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'

// Styling & Animation
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animation";

const Home = () => {
    // Get the current Location
    const location = useLocation()
    const pathID = location.pathname.split('/')[2]

    // Setch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    // Get the data back
    const { popular, newGames, upcoming, searched } = useSelector((state => state.games))

    return (
        <StyledGameList
            variants={fadeIn} 
            initial="hidden"
            animate="show"
        >
            <AnimateSharedLayout>
                <AnimatePresence>
                    {pathID && <GameDetail pathID={pathID} /> }
                </AnimatePresence>

                {searched.length ? (
                <div className="searched">
                    <h2>Searches Games</h2>
                    <StyledGames>
                    {searched.map(game => (
                        <Game 
                            key={game.id}
                            name={game.name} 
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                        />
                    ))}
                    </StyledGames>
                </div>
                ) : ''}

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

                <h2>Popular Games</h2>
                <StyledGames>
                    {popular.map(game => (
                        <Game 
                            key={game.id}
                            name={game.name} 
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                        />
                    ))}
                </StyledGames>

                <h2>New Games</h2>
                <StyledGames>
                    {newGames.map(game => (
                        <Game 
                            key={game.id}
                            name={game.name} 
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                        />
                    ))}
                </StyledGames>
            </AnimateSharedLayout>
        </StyledGameList>
    )
}

const StyledGameList = styled(motion.div)`
    padding: 11.5rem 5rem 5rem 5rem;

    @media (max-width: 600px) {
        padding: 0rem 2rem;
    }

    h2 {
        padding: 2rem 0rem;
    }
`

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem 2rem;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`

export default Home
