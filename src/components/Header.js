import React from "react"
import HeaderLogInForm from "./HeaderLogInForm"
import styled from "styled-components"

const StyledHeader = styled.div`
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;

h1 {
    color: #b66e41;
}
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>Grandma's Recipes</h1>
            <HeaderLogInForm />
        </StyledHeader>
    )
}

export default Header
