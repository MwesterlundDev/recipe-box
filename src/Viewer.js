import React, { Component } from 'react'
import RecipeStepList from './StepList'
import RecipeIngridientList from './IngredientList'
import RecipeEditForm from './RecipeEditForm'

const Header = props => {
    const { selectedRecipe, setEdit } = props

    if (selectedRecipe) {
        return (
            <div className="recipe-viewer-header">
                <div className="recipe-title">{selectedRecipe.title}</div>
                <div className="recipe-description">{selectedRecipe.description}</div>
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

class Viewer extends Component {

    state = {
        edit: false
    }

    render() {
        const { selectedRecipe, isAddNew } = this.props

        if (isAddNew) {
            console.log("ADD NEW ONE!")
            return (
                <div className="recipe-viewer-content">
                    <RecipeEditForm />
                </div>
            )
        }

        if (selectedRecipe) { 
            return (<div id="recipe-viewer">
                <div className="recipe-viewer-content">
                    <Header selectedRecipe={selectedRecipe} />
                    <RecipeIngridientList ingridients={selectedRecipe.ingridients} />
                    <RecipeStepList steps={selectedRecipe.steps} />
                </div>
            </div>)
        } else {
            return (<div id="recipe-viewer">
            <div className="recipe-viewer-content">
                <Header selectedRecipe={selectedRecipe} />
            </div>
        </div>)
        }
    }
}

export default Viewer