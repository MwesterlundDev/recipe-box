import React, { Component } from 'react'

const RecipeStepRows = props => {

    const rows = props.steps.map((step, index) => {

        return (
            <li key={"recipe-step-row-" + index} className="recipe-step-row" title={step}>
                {step}
            </li>
        )
    })

    return rows

}

class RecipeStepList extends Component {

    
    render() {
        const { steps } = this.props

        return (
            <div id="recipe-steps">
                <div className="recipe-title">Steps</div>
                <ol>
                    <RecipeStepRows steps={steps} />
                </ol>
            </div>
        )
    }

}

export default RecipeStepList