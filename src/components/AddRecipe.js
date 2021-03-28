import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import styled from "styled-components"
// import axios from "axios"

const StyledAdd = styled.div`
height: 99vh;

h1 {
    margin: 0;
    text-align: center;
    font-family: 'Old Standard TT', serif;
    color: #b66e41;
    font-size: 65px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px #232824;
}

form {
    width: 50%;
    margin: 0 auto;
    margin-top: 25px;
    padding: 40px;
    border: 1px black solid;
    border-radius: 10px;
    background-color: #fdf3da;
}

label {
    font-family: 'Old Standard TT', serif;
    color: #b66e41;
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: bolder;
}

input {
    width: 100%;
}

.label-input {
    padding-top: 25px;
}

button {
    margin: 15px 15px 0 0; 
    border-radius: 10px;
    height: 35px;
    width: 75px;
    border: 2px #b66e41 solid;
    color: #b66e41;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
}
`

const AddRecipe = () => {

    const { push } = useHistory()

    const addRecipe = {
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    }

    const [newRecipe, setNewRecipe] = useState(addRecipe)

    const onChange = event => {
        setNewRecipe({
            ...newRecipe,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        push("/recipes")
        // axios.post("", newRecipe)
        //      .then(res => {
        //      push("/recipes")
        //      })
        //      .catch(err => console.log(err))
    }

    return(
        <StyledAdd>
            <form onSubmit={onSubmit}>
                <h1>New Recipe</h1>

                <div className="label-input">
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={newRecipe.title}
                        onChange={onChange}
                    />
                </div>

                <div className="label-input">
                    <label>Source: </label>
                    <input
                        type="text"
                        name="source"
                        value={newRecipe.source}
                        onChange={onChange}
                    />
                </div>

                <div className="label-input">
                    <label>Ingredients: </label>
                    <input
                        type="text"
                        name="ingredients"
                        value={newRecipe.ingedients}
                        onChange={onChange}
                    />
                </div>

                <div className="label-input">
                    <label>Instructions: </label>
                    <input               
                        type="text"
                        name="instructions"
                        value={newRecipe.instructions}
                        onChange={onChange}
                    />
                </div>

                <div className="label-input">
                    <label>Category: </label>
                    <input
                        type="text"
                        name="category"
                        value={newRecipe.category}
                        onChange={onChange}
                    />
                </div>

                <button>Submit</button>
                <Link to="/recipes"><button>Cancel</button></Link>
            </form>
        </StyledAdd>
    )
}

export default AddRecipe