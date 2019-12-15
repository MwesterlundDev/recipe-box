import React, { Component } from 'react'

const RecipeRows = props => {
    const rows = props.recipes.map((recipe, index) => {
        let selected = ""
        if (props.selectedRecipe && props.selectedRecipe.id) {
            selected = (props.selectedRecipe.id && recipe.id === props.selectedRecipe.id) ? "selected" : ""
        }
        return (
            <div className={"recipe-list-row "  + selected} title={recipe.description} onClick={() => props.handleSelect(recipe)}>
                {recipe.title}
            </div>
        )
    })

    return rows;
}

class RecipeList extends Component {

    render() {
        const { recipes, selectedRecipe, handleSelect } = this.props;
        return ( 
            <div className="recipe-list">
                <div className="recipe-list-header">Recipe List</div>
                <RecipeRows recipes={recipes} selectedRecipe={selectedRecipe} handleSelect={handleSelect} />
            </div>
        )
    }
}

export default RecipeList