import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.div`
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;

h1 {
    font-family: 'Pacifico', cursive;
    text-shadow: 3px 3px 5px #232824;
    font-size: 75px;
    color: #b66e41;
    letter-spacing: 5px;
}

button {
    margin-left: 25px;
    border-radius: 10px;
    height: 50px;
    width: 150px;
    border: 2px #b66e41 solid;
    color: #b66e41;
    font-weight: bolder;
    font-size: 20px;
}

.add {
    width: 200px;
}
`

const LogOutHeader = () => {

    const handleLogOut = () => {
        // localStorage.removeItem('token');
    }

    return (
        <StyledHeader>
            <h1>Grandma's Recipes</h1>
                <div>
                    <Link to="/add-recipe"><button className="add">Add New Recipe</button></Link>
                    <Link to="/" onClick={handleLogOut}><button>Log Out</button></Link>
                </div>
        </StyledHeader>
    )
}

export default LogOutHeader
