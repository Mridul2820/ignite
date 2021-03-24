import { useState } from 'react'

// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";

// Redux & Routes
import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux"

// assets
import logo from "../img/logo.svg";

// Animation
import { fadeIn } from '../animation';

const Nav = () => {
    const dispatch = useDispatch()

    const [textInput, setTextInput] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
    }

    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    };

    return (
        <StyledNav 
            variants={fadeIn} 
            initial="hidden"
            animate="show"
        >
            <StyledLogo onClick={clearSearched}>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </StyledLogo>
            <form className="search">
                <input 
                    value={textInput} 
                    onChange={inputHandler} 
                    type="text"
                />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 1.5rem 5rem;
    text-align: center;

    input {
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        outline: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);
        font-weight: bold;
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: .5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: #fff;
    }
`

const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;

    img {
        height: 2rem;
        width: 2rem;
    }
`

export default Nav
