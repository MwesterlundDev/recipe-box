import React, { Component } from 'react'
import RecipeIngredientList from './IngredientList'
import NewIngredientRow from './NewIngredientRow'
import RecipeStepList from './StepList'
import NewStepRow from './NewStepRow'

const Header = props => {
    const { title, description, save, cancel, handleChange } = props

    return (
        <div className="recipe-viewer-header">
            <div className="recipe-form-row">
                <div className="recipe-form-row-label">Title: </div>
                <input type="text" name="title" value={title} placeholder="Enter Title" className="recipe-form-text-input" onChange={handleChange} />
            </div>
            <div className="recipe-form-row">
                <div className="recipe-form-row-label">Description: </div>
                <textarea rows="5" name="description" value={description} placeholder="Enter Description" className="recipe-form-text-area" onChange={handleChange}/>
            </div>
            <div className="recipe-vewier-controls">
                <input type="button" value="Save" className="recipe-save-button" onClick={save} />
                <input type="button" value="Cancel" className="recipe-cancel-button" onClick={cancel} />
            </div>
        </div>
    )
}

class RecipeEditForm extends Component {

    constructor(props) {
        super(props)

        console.log("RecipeEditForm.constructor.props", props)

        this.initialState = {
            title: '',
            description: '',
            ingredients: [],
            steps: []
        }

        // this.onSave = props.onSave();
        // this.onCancel = props.onCancel();

        this.state = this.initialState

        this.save = this.save.bind(this);
        this.addNewIngredient = this.addNewIngredient.bind(this)
        this.addNewStep = this.addNewStep.bind(this)
    }

    save = () => {
        console.log("SAVE THIS: ", this.props)
        // DO SOME VALIDATION HERE

        if (this.state.title && this.state.description) {
            this.props.addRecipe(this.state)
        }
    }

    // cancel = () => {
    //     console.log("CANCEL THIS: ", this.state)
    // }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    addNewIngredient(ingredient) {
        console.log("ADD NEW INGREDIENTS: ", ingredient, this.state.ingredients)
        this.setState((state) => ({
            ingredients: [ ...state.ingredients, ingredient]
        }))
    }

    addNewStep(step) {
        this.setState((state) => ({
            steps: [ ...state.steps, step]
        }))
    }

    render() {
        // const { title, description, ingredients, steps } = this.state

        const { recipe, save, cancel } = this.props;

        return (
            <form className="recipe-viewer-form">
                <div className="recipe-title">Add New Recipe</div>
                <Header title={this.title} 
                    description={this.description} 
                    save={this.save} 
                    cancel={cancel} 
                    handleChange={this.handleChange}/>
                <RecipeIngredientList ingredients={this.state.ingredients} />
                <NewIngredientRow addNewIngredient={this.addNewIngredient} />
                <RecipeStepList steps={this.state.steps} />
                <NewStepRow addNewStep={this.addNewStep} />
            </form>
        )
    }

}

export default RecipeEditForm