import React, { Component } from 'react'

const Header = props => {
    const { selectedRecipe } = props

    if (selectedRecipe) {
        return (
            <div className="recipe-viewer-header">
                <div className="recipie-title">{selectedRecipe.title}</div>
            </div>
        )
    } else {
        return (
            <div className="recipe-viewer-header">
                <div className="recipie-title">Please Select a Recipe</div>
            </div>
        )
    }
}

class Viewer extends Component {

    render() {
        const { selectedRecipe } = this.props

        return <div id="recipe-viewer">
            <Header selectedRecipe={selectedRecipe} />
        </div>
    }
}

export default Viewer