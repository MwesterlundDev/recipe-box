import { connect } from 'react-redux'

import RecipeViewerComponent from './RecipeViewerCompenent'

const mapStateToProps = (state) => {
    const { recipe } = state.recipeViewerReducer

    return {
        recipe: recipe
    }
}

const mapDispatchToProps = (dispatch) => {

    return null
}

const RecipeViewerContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeViewerComponent);

export default RecipeViewerContainer;