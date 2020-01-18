import { connect } from 'react-redux'

import RecipeViewerComponent from './RecipeViewerCompenent'
import recipeListOperations from '../RecipeList/ReduxStuff/operations' // I DO NOT LIKE THIS COUPLING
import recipeViewerOperations from './ReduxStuff/operations'

const mapStateToProps = (state) => {
    const { recipe, isNew } = state.recipeViewerReducer

    return {
        recipe: recipe,
        isNew: isNew

    }
}

const mapDispatchToProps = (dispatch) => {

    const addRecipe = (recipe) => {
        dispatch(recipeListOperations.addNewRecipe(recipe))
        dispatch(recipeViewerOperations.cancelEdit())

    }

    const cancelEdit = () => {
        dispatch(recipeListOperations.selectRecipe(null));
        dispatch(recipeViewerOperations.cancelEdit())
    }
    
    const remove = (id) => {
        dispatch(recipeListOperations.deleteRecipe(id))
        // dispatch(recipeListOperations.selectRecipe(null));
        dispatch(recipeViewerOperations.recipeSelected(null))

    }

    return {
        addRecipe,
        cancelEdit,
        remove
    }
}

const RecipeViewerContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeViewerComponent);

export default RecipeViewerContainer;