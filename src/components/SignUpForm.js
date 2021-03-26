import React, { useState } from "react"
import styled from "styled-components"

const StyledSignUpForm = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
`

const SignUpForm = () => {

    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: ""
    })

    const changeHandler = () => {

    }

    const submitHandler = event => {
        event.preventDefault();
    }


    return(
        <StyledSignUpForm onSubmit={submitHandler}>
            <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={changeHandler}
            />

            <input
                type="text"
                name="username"
                placeholder="Create username"
                value={newUser.username}
                onChange={changeHandler}
            />

            <input
                type="password"
                name="password"
                placeholder="Create password"
                value={newUser.password}
                onChange={changeHandler}
            />
            
            <button>Sign Up</button>
        </StyledSignUpForm>
    )
}

export default SignUpForm
