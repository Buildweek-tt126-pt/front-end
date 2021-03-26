import React, { useState } from "react"

const LogInForm = () => {

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
    //! Import axios and useHistory.
    //     axios.post("", login)
    //         .then(res => {
    //             localStorage.setItem("token", res.data.payload)
    //             history.pushState("/recipes")
    //         })
    //         .catch(err => console.log(err))
    // }

    return(
        <form onSubmit={handleSubmit}>
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
        </form>
    )
}

export default LogInForm