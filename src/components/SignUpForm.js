import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import * as yup from "yup"
// import axios from "axios"


    /* --STYLING STARTS HERE-- */

const StyledSignUpForm = styled.form`
display: flex;
flex-direction: column;

h1 {
    font-family: 'Old Standard TT', serif;
    color: #b66e41;
    font-size: 100px;
    letter-spacing: 4px;
    margin-bottom: 0;
    text-shadow: 2px 2px 5px #232824;
}

h2 {
    font-family: 'Old Standard TT', serif;
    text-shadow: 1x 1px 2px #232824;
    color: #b66e41;
    font-size: 16px;
    margin-bottom: 40px;
    letter-spacing: 2px;
}

span {
    color: red;
    font-weight: bolder;
    font-family: monospace;
    text-transform: uppercase;
    font-size: 14px;
    padding-left: 5px;
    padding-bottom: 10px;
}

input {
    border-radius: 10px;
    height: 30px;
    width: 200px;
    
    margin-bottom: 10px;
    box-shadow: 2px 2px 2px #b66e41;
}

button {

    &:disabled {
        border-radius: 0;
        height: 30px;
        width: 100px;
        background-color: red;
        color: black;
    }

    border-radius: 10px;
    height: 30px;
    width: 200px;
    background-color: green;
    color: white;
}
`
    /* --STYLING ENDS HERE-- */

    /* --CREATING SCHEMA OBJECT-- */

    const schema = yup.object().shape({
        email: yup.string().email().required("An email is required."),
        username: yup.string().required("A username is required.")
            .min(5, "Username must be at least five characters")
            .max(15, "Username cannot be more than 15 characters"),
        password: yup.string().required("A password is required")
            .min(5, "Username must be at least five characters")            
    })

    /* --SignUpForm COMPONENT STARTS HERE-- */

const SignUpForm = () => {

    const { push } = useHistory()

    const initialState = {
        email: "",
        username: "",
        password: ""
    }
    
    const [users, setUsers] = useState([])
    
    const [form, setForm] = useState(initialState)
    
    const [errors, setErrors] = useState({
        email: "",
        username: "",
        password: ""
    })
    
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ""}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const changeHandler = event => {
        const { name, value } = event.target
        setFormErrors(name, value)
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    const submitHandler = event => {
        event.preventDefault();
        setForm(initialState)
        setUsers([...users, form])
        push("/recipes")

        //! Alternative code below to PUT form data to an API

        // const newUser = {
        //     email: form.email,
        //     username: form.username,
        //     password: form.password
        // }
        // axios.put("", newUser)
        //     .then(res => {
        //         setUsers(res.data)
        //         setForm(initialState)
        //?           push("/")
        //     })
        //     .catch(err => console.log(err.res))
    }

    useEffect(() => {
        schema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])


    return(
        <StyledSignUpForm onSubmit={submitHandler}>

            <h1>Sign Up!</h1>
            <h2>And lettuce help you make delicious meals every thyme!</h2>

            <span>{errors.email}</span>
            <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={changeHandler}
            />

            <span>{errors.username}</span>
            <input
                type="text"
                name="username"
                placeholder="Create username"
                value={form.username}
                onChange={changeHandler}
            />

            <span>{errors.password}</span>
            <input
                type="password"
                name="password"
                placeholder="Create password"
                value={form.password}
                onChange={changeHandler}
            />
            
            <button disabled={disabled}>Sign Up</button>
        </StyledSignUpForm>
    )
}

export default SignUpForm
