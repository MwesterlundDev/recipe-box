import React, { Component } from 'react'

const RecipeIngredientRows = props => {

    const rows = props.ingredients.map((ing, index) => {

        return (
            <li key={"recipe-ingredient-row-" + index} className="recipe-ingredient-row" title={ing.ingredient}>
                <div className="recipe-ingredient-row-size">{ing.size} - </div>
                <div className="recipe-ingredient-row-ingredient">{ing.ingredient}</div>
            </li>
        )
    })

    return rows

}

class RecipeIngredientList extends Component {

    render() {
        const { ingredients } = this.props

        return (
            <div id="recipe-ingredients">
                <div className="recipe-title">Ingredients</div>
                <ul>
                    <RecipeIngredientRows ingredients={ingredients} />
                </ul>
            </div>
        )
    }

}

export default RecipeIngredientList