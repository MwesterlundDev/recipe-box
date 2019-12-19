import React, { Component } from 'react'

const RecipeIngridientRows = props => {

    const rows = props.ingridients.map((ing, index) => {

        return (
            <li key={"recipe-ingridient-row-" + index} className="recipe-ingridient-row" title={ing.ingridient}>
                <div className="recipe-ingridient-row-size">{ing.size} - </div>
                <div className="recipe-ingridient-row-ingridient">{ing.ingridient}</div>
            </li>
        )
    })

    return rows

}

class RecipeIngridientList extends Component {

    
    render() {
        const { ingridients } = this.props

        return (
            <div id="recipe-ingridients">
                <div className="recipe-title">Ingridients</div>
                <ul>
                    <RecipeIngridientRows ingridients={ingridients} />
                </ul>
            </div>
        )
    }

}

export default RecipeIngridientList