import React, { Component } from 'react'

const RecipeRows = props => {
    const rows = props.recipes.map((recipe, index) => {
        let selected = (props.selectedRecipeId === recipe.id) ? "selected" : ""
        // if (props.selectedRecipe && props.selectedRecipe.id) {
        //     selected = (props.selectedRecipe.id && recipe.id === props.selectedRecipe.id) ? "selected" : ""
        // }
        return (
            <div key={"recipe-row-" + index} className={"recipe-list-row "  + selected} title={recipe.description} onClick={() => props.handleSelect(recipe)}>
                <div className="recipe-list-label">{recipe.title}</div>
                <button className="remove-button" title={"Remove " + recipe.title} onClick={(event) => props.handleRemoveClick(event, recipe.id)}>-</button>
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

        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    componentDidMount() {
        console.log("this.props: ", this.props)
        this.props.fetchRecipes();// comes later?

    }

    handleRemoveClick(event, id) {
        event.stopPropagation();
        this.props.remove(id);
    }

    render() {
        // const { recipes, selectedRecipe, handleSelect, isAddNew, addNew } = this.props;
        const { recipes, selectedRecipeId, selectRecipe, addNew} = this.props;

        console.log("this.props: ", this.props)
        return ( 
            <div className="recipe-list">
                <div className="recipe-list-header">Recipe List</div>
                <div id="recipe-list-wrapper">
                    <RecipeRows 
                        recipes={recipes} 
                        selectedRecipeId={selectedRecipeId} 
                        handleSelect={selectRecipe}
                        handleRemoveClick={this.handleRemoveClick}/>
                </div>
                <RecipeListControls addNew={addNew}/>
            </div>
        )
    }
}

export default RecipeListComponent