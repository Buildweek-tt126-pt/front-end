import React from "react"

const HeaderLogInForm = () => {
    return(
        <form>
            <input
                type="text"
                name="username"
                placeholder="Username"
                // value={}
                // onChange={}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                // value={}
                // onChange={}
            />
            
            <button>Log In</button>
        </form>
    )
}

export default HeaderLogInForm