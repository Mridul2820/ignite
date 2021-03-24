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
                    placeholder="Search Games"
                />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 1.5rem 5rem 2rem 5rem;
    text-align: center;
    box-shadow: 0 0 30px rgba(0, 0, 0, .2);

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;

    @media (max-width: 600px) {
        padding: 1.5rem 2rem 2rem 2rem;
    }

    @media (max-width: 375px) {
        padding: 1.5rem 1rem 2rem 1rem;
    }

    input {
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: 3px solid #ff7676;
        outline: none;
        margin-top: 1rem;
        font-weight: bold;

        @media (max-width: 1000px) {
            width: 40%;
        }

        @media (max-width: 800px) {
            width: 50%;
        }

        @media (max-width: 600px) {
            width: calc(100% - 120px);
        }

        @media (max-width: 375px) {
            width: calc(100% - 100px);
        }
    }

    button {
        font-size: 1.5rem;
        padding: .5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: #fff;
        border: 3px solid #ff7676;

        @media (max-width: 600px) {
            padding: .5rem 1rem;
            width: 120px;
        }

        @media (max-width: 375px) {
            padding: .5rem;
            width: 100px;
        }
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
