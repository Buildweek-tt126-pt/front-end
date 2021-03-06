import React from "react"
import HeaderLogInForm from "./HeaderLogInForm"
import styled from "styled-components"

const StyledHeader = styled.div`
height: 15vh;
display: flex;
align-items: center;

h1 {
    font-family: 'Pacifico', cursive;
    text-shadow: 3px 3px 5px #232824;
    font-size: 75px;
    color: #b66e41;
    letter-spacing: 5px;
    margin-left: 25px;
}
`

const MainHeader = () => {
    return (
        <StyledHeader>
            <h1>Grandma's Recipes</h1>
            <HeaderLogInForm />
        </StyledHeader>
    )
}

export default MainHeader
