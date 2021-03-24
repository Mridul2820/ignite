import React from 'react'
import { Link } from "react-router-dom";

// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";
import { popup } from "../animation";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// Utils
import { smallImage } from "../utils";

const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString();

    // Load Detail handler
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadDetail(id))
    }

    return (
        <>
        {image && 
        <StyledGame 
            layoutId={stringPathId} 
            onClick={loadDetailHandler} 
            variants={popup} 
            initial="hidden"
            animate="show"
        >
            <Link to={`/games/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/> 
            </Link>
        </StyledGame>
        }
        </>
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
