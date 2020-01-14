import React, { Component } from 'react'

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
            ingridients: [],
            steps: []
        }

        // this.onSave = props.onSave();
        // this.onCancel = props.onCancel();

        this.state = this.initialState
    }

    save = () => {
        console.log("SAVE THIS: ", this.state)
    }

    cancel = () => {
        console.log("CANCEL THIS: ", this.state)
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { title, description, ingridients, steps } = this.state

        return (
            <form className="recipe-viewer-form">
                <div className="recipe-title">Add New Recipe</div>
                <Header title={title} 
                    description={description} 
                    save={this.save} 
                    cancel={this.cancel} 
                    handleChange={this.handleChange}/>
            </form>
        )
    }

}

export default RecipeEditForm