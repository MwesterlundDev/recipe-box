import React, { Component } from 'react'

const RecipeRows = props => {
    const rows = props.recipes.map((recipe, index) => {
        let selected = ""
        if (props.selectedRecipe && props.selectedRecipe.id) {
            selected = (props.selectedRecipe.id && recipe.id === props.selectedRecipe.id) ? "selected" : ""
        }
        return (
            <div key={"recipe-row-" + index} className={"recipe-list-row "  + selected} title={recipe.description} onClick={() => props.handleSelect(recipe)}>
                {recipe.title}
            </div>
        )
    })

    return rows;
}

const RecipeListControls = props => {
    return (
        <div id="recipe-list-controls">
            <input type="button" className="add-button" value="+" onClick={() => props.addNew()}/>
        </div>
    )
}

class RecipeList extends Component {

    render() {
        const { recipes, selectedRecipe, handleSelect, isAddNew, addNew } = this.props;
        return ( 
            <div className="recipe-list">
                <div className="recipe-list-header">Recipe List</div>
                <div id="recipe-list-wrapper">
                    <RecipeRows recipes={recipes} selectedRecipe={selectedRecipe} handleSelect={handleSelect} />
                </div>
                <RecipeListControls isAddNew={isAddNew} addNew={addNew} />
            </div>
        )
    }
}

export default RecipeList