import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LogOutHeader from "./LogOutHeader"
// import axios from "axios"

const StyledRecipes = styled.div`
height: 99vh;

.recipe {
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    border: 1px black solid;
    border-radius: 10px;
    background-color: #fdf3da;
}
`

const StyledDiv = styled.div`
button {
    margin-left: 5px;
    margin-right: 15px;
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

const RecipesList = () => {

    const recipeList = [
        {
            id: 0,
            title: "Spaghetti",
            source: "Grandma",
            ingredients: "Pasta and Sauce",
            instructions: "Do something",
            category: "Italian"
        },
        {
            id: 1,
            title: "Pizza",
            source: "Grandma",
            ingredients: "Bread, Sauce, and Cheese",
            instructions: "Do something else",
            category: "Italian"
        }
    ]

    const [recipes, setRecipes] = useState(recipeList)

    //! Alternative code below to GET recipes

    // useEffect(() =>{
    //     const getRecipes = () => {
    //         axios.get("")
    //             .then(res => {
    //                 setRecipes(res.data)
    //             })
    //             .catch(err => console.log(err))
    //     }

    //     getRecipes()
    // }, [])

    return (
        <StyledRecipes>
            <LogOutHeader />
            {recipes.map(recipe => {
                return(
                <div className="recipe" key={recipe.id}>
                    <p>Title: {recipe.title}</p>
                    <p>Source: {recipe.source}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                    <p>Category: {recipe.category}</p>
                    <StyledDiv>
                        <button>Edit</button>
                        <button>Delete</button>
                    </StyledDiv>
                </div>)
            })}          
    </StyledRecipes>
    )
}

export default RecipesList