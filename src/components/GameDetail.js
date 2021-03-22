import React from 'react'
import { useHistory } from "react-router-dom";

// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

// Utils
import { smallImage } from "../utils";

// Images Import
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';

const GameDetail = ({ pathID }) => {
    const history = useHistory()

    // Exit Detail
    const exitDetailHandler = e => {
        const element = e.target
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    // Get Platform images
    const getPlatform = (platform) => {
        switch(platform){
            case 'PlayStation 4':
                return playstation            
            case 'PlayStation 5':
                return playstation
            case 'Xbox One':
                return xbox
            case 'PC':
                return steam
            case 'Nintendo Switch':
                return nintendo
            case 'iOS':
                return apple
            default :
                return gamepad
        }
    }

    // Data
    const {screen, game, isLoading} = useSelector((state) => state.detail)

    return (
        <>
        {!isLoading && (
        <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
            <StyledDetail layoutId={pathID}>
                <StyledStat>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathID}`}>{game.name} </motion.h3>
                        <p>Rating : {game.rating} </p>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map(platform => (
                                <img 
                                    src={getPlatform(platform.platform.name)} 
                                    alt={platform.platform.name}
                                    key={platform.platform.id} 
                                />

                            ))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStat>
                <StyledMedia>
                    <motion.img 
                        layoutId={`image ${pathID}`}
                        src={smallImage(game.background_image, 1280)} 
                        alt={game.name}
                    />
                </StyledMedia>
                <StyledDescription>
                    <p>{game.description_raw}</p>
                </StyledDescription>
                <div className="gallery">
                    {screen.map(shot => (
                        <img 
                            key={shot.id} 
                            src={smallImage(shot.image, 1280)} 
                            alt="screnshot"
                        />
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
    z-index: 5;
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
    z-index: 15;
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
        margin-left: 2.5rem;
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
