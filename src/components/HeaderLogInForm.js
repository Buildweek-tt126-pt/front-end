import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
// import axios from "axios"

const StyledLogIn = styled.form`
 margin-left: 100px;
 
input {
    margin-left: 25px;
    border-radius: 10px;
    height: 30px;
    width: 200px;
    box-shadow: 2px 2px 2px #b66e41;
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
`

const HeaderLogInForm = () => {

    const { push } = useHistory()

    const credentials = {
        username: "",
        password: ""
    }

    const [login, setLogin] = useState(credentials)

    const handleChange = event => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setLogin(credentials)
        push("/recipes")
    //! Alternative code below to POST form data to an API
    //     axios.post("", login)
    //         .then(res => {
    //             localStorage.setItem("token", res.data.payload)
    //             push("/recipes")
    //         })
    //         .catch(err => console.log(err))
    }

    return(
        <StyledLogIn onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={login.username}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={login.password}
                onChange={handleChange}
            />
            
            <button>Log In</button>
        </StyledLogIn>
    )
}

export default HeaderLogInForm