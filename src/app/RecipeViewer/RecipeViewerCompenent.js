import React, { Component } from 'react'
import RecipeStepList from './StepList' // this is old, I am not sure if this how I want to do this..
import RecipeIngredientList from './IngredientList'
import RecipeEditForm from './RecipeEditForm'

const Header = props => {
    const { recipe, setEdit } = props

    if (recipe.id != null) {
        return (
            <div className="recipe-viewer-header">
                <div className="recipe-title">{recipe.title}</div>
                <div className="recipe-description">{recipe.description}</div>
                <div className="recipe-vewier-controls">
                    <input type="button" value="Edit" className="recipe-edit-button" onClick={setEdit} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="recipe-viewer-header">
                <div className="recipe-title">Please Select a Recipe</div>
            </div>
        )
    }
}

class RecipeViewerComponent extends Component {

    constructor (props) {
        super(props) 

        this.state = {
            isEdit: false
        }
    }

    render() {
        const { recipe, isNew, addRecipe, cancelEdit } = this.props

        if (isNew) {
            console.log("ADD NEW ONE!")
            return (
                <div className="recipe-viewer-content">
                    <RecipeEditForm recipe={recipe} addRecipe={addRecipe} cancel={cancelEdit} />
                </div>
            )
        }

        if (recipe.id != null) { 
            return (<div id="recipe-viewer">
                <div className="recipe-viewer-content">
                    <Header recipe={recipe} />
                    <RecipeIngredientList ingredients={recipe.ingredients} />
                    <RecipeStepList steps={recipe.steps} />
                </div>
            </div>)
        } else {
            return (<div id="recipe-viewer">
            <div className="recipe-viewer-content">
                <Header recipe={recipe} />
            </div>
        </div>)
        }
    }
}

export default RecipeViewerComponent