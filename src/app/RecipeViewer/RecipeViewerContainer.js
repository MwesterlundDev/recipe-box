import { connect } from 'react-redux'

import RecipeViewerComponent from './RecipeViewerCompenent'
import recipeListOperations from '../RecipeList/ReduxStuff/operations' // I DO NOT LIKE THIS COUPLING
import recipeViewerOperations from './ReduxStuff/operations'

const mapStateToProps = (state) => {
    const { recipe, isNew, isEdit } = state.recipeViewerReducer

    return {
        recipe: recipe,
        isNew: isNew,
        isEdit: isEdit

    }
}

const mapDispatchToProps = (dispatch) => {

    const addRecipe = (recipe) => {
        dispatch(recipeListOperations.addNewRecipe(recipe))
        dispatch(recipeViewerOperations.cancelEdit())

    }

    const cancelEdit = (isNew) => {
        if (isNew) {
            dispatch(recipeListOperations.selectRecipe(null));
        }
        dispatch(recipeViewerOperations.cancelEdit())
    }
    
    const remove = (id) => {
        dispatch(recipeListOperations.deleteRecipe(id))
        // dispatch(recipeListOperations.selectRecipe(null));
        dispatch(recipeViewerOperations.recipeSelected(null))

    }

    const edit = () => {
        dispatch(recipeViewerOperations.editRecipe())
    }
    
    const updateRecipe = (recipe) => {
        dispatch(recipeListOperations.updateRecipe(recipe));
        dispatch(recipeViewerOperations.recipeUpdated(recipe)); // not to sure about this... 
    }

    return {
        addRecipe,
        updateRecipe,
        cancelEdit,
        remove,
        edit,
    }
}

const RecipeViewerContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeViewerComponent);

export default RecipeViewerContainer;