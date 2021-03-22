import React from 'react'
import { Link } from "react-router-dom";

// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
    // Load Detail handler
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame onClick={loadDetailHandler} >
            <Link to={`/games/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name}/> 
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game
