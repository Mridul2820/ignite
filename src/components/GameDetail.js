import React from 'react'
// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";

const GameDetail = () => {
    const {screen, game, isLoading} = useSelector((state) => state.detail)


    return (
        <>
        {!isLoading && (
        <StyledCardShadow>
            <StyledDetail>
                <StyledStat>
                    <div className="rating">
                        <h3>{game.name} </h3>
                        <p>Rating : {game.rating} </p>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map(platform => (
                                <h3 key={platform.platform.id} >{platform.platform.name}</h3>
                            ))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStat>
                <StyledMedia>
                    <img src={game.background_image} alt={game.name}/>
                </StyledMedia>
                <StyledDescription>
                    <p>{game.description_raw}</p>
                </StyledDescription>
                <div className="gallery">
                    {screen.map(shot => (
                        <img key={shot.id} src={shot.image} alt="screnshot"/>
                    ))}
                </div>
            </StyledDetail>
        </StyledCardShadow>
        )}
        </>
    )
}

const StyledCardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: .5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track {
        background-color: #fff;
    }
`

const StyledDetail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 3rem;
    background: white;
    position: absolute;
    left: 10%;
    top: 5%;
    color: #000;

    img {
        width: 100%;
    }
`

const StyledStat = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledInfo = styled(motion.div)`
    text-align: center;
`

const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`

const StyledMedia = styled(motion.div)`
    margin-top: 5rem;

    img {
        width: 100%;
    }
`

const StyledDescription = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail
