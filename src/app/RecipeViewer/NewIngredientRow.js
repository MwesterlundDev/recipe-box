import React, { Component } from 'react'

const initialState = {
    size: "",
    ingredient: ""
};

class NewIngredientRow extends Component {

    constructor (props) {
        super(props);

        this.state = { ...initialState }

        this.add = this.add.bind(this)
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    add() {
        this.props.addNewIngredient(this.state)
        this.setState(initialState)
    }

    render() {
        const { addNewIngredient } = this.props;
        console.log("add new ingredients: ", addNewIngredient)
        
        return (
            <div className="new-recipe-item-row">
                <input type="text" value={this.state.size} name="size" placeholder="Enter Size" className="new-ingredient-input" onChange={this.handleChange} />
                <input type="text" value={this.state.ingredient} name="ingredient" placeholder="Enter Ingredient" className="new-ingredient-input" onChange={this.handleChange} />
                <input type="button" className="add-button" value="+" onClick={this.add}/>
            </div>
        )


    }

}

export default NewIngredientRow