import React from 'react'

// Styling & Animation
import styled from 'styled-components'
import { motion } from "framer-motion";

import logo from "../img/logo.svg";

const Nav = () => {
    return (
        <StyledNav>
            <StyledLogo>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </StyledLogo>
            <div className="search">
                <input type="text"/>
                <button>Search</button>
            </div>
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
