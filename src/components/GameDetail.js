import React from 'react'
// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";

const GameDetail = () => {
    const {screen, game} = useSelector((state) => state.detail)


    return (
        <StyledCardShadow>
            <StyledDetail>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name} </h3>
                        <p>Rating : {game.rating} </p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(platform => (
                                <h3 key={platform.platform.id} >{platform.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt={game.name}/>
                </div>
                <div className="description">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen.map(shot => (
                        <img key={shot.id} src={shot.image} alt="screnshot"/>
                    ))}
                </div>
            </StyledDetail>
        </StyledCardShadow>
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
    padding: 2rem;
    background: white;
    position: absolute;
    left: 10%;
    top: 5%;
    color: #000;

    img {
        width: 100%;
    }
`

export default GameDetail
