import React, { Component } from 'react'

const initialState = {
    step: ""
};

class NewStepRow extends Component {

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
        this.props.addNewStep(this.state.step)
        this.setState(initialState)
    }

    render() {
        const { addNewStep } = this.props;
        
        return (
            <div className="new-recipe-item-row">
                <textarea rows="5" name="step" value={this.state.step} placeholder="Enter Step" className="recipe-form-text-area" onChange={this.handleChange}/>
                <input type="button" className="add-button" value="+" onClick={this.add}/>
            </div>
        )


    }

}

export default NewStepRow