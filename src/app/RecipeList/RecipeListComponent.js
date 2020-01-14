import React, { Component } from 'react'

const RecipeRows = props => {
    const rows = props.recipes.map((recipe, index) => {
        let selected = (props.selectedRecipeId === recipe.id) ? "selected" : ""
        // if (props.selectedRecipe && props.selectedRecipe.id) {
        //     selected = (props.selectedRecipe.id && recipe.id === props.selectedRecipe.id) ? "selected" : ""
        // }
        return (
            <div key={"recipe-row-" + index} className={"recipe-list-row "  + selected} title={recipe.description} onClick={() => props.handleSelect(recipe.id)}>
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

class RecipeListComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("this.props: ", this.props)
        this.props.fetchRecipes();// comes later?

    }

    render() {
        // const { recipes, selectedRecipe, handleSelect, isAddNew, addNew } = this.props;
        const { recipes, selectedRecipeId, selectRecipe} = this.props;

        console.log("this.props: ", this.props)
        return ( 
            <div className="recipe-list">
                <div className="recipe-list-header">Recipe List</div>
                <div id="recipe-list-wrapper">
                    <RecipeRows recipes={recipes} selectedRecipeId={selectedRecipeId} handleSelect={selectRecipe} />
                </div>
                {/* <RecipeListControls isAddNew={isAddNew} addNew={addNew} /> */}
            </div>
        )
    }
}

export default RecipeListComponent