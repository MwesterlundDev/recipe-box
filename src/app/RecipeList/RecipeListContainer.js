import { connect } from 'react-redux';

// This seems to me to be tightly coupled from different components...
// maybe I should have just one reducer for all recipes... for all of a single data type
// and something like another reducer for something like users?
import recipeListOperations from './ReduxStuff/operations' // not sure about this....
import recipeViewerOperations from '../RecipeViewer/ReduxStuff/operations' // even more not sure about this

import RecipeListComponent from './RecipeListComponent'

const mapStateToProps = (state) => {
    console.log("State: ", state)
    const { recipes, selectedRecipeId } = state.recipeListReducer;
 
    return {
        recipes,
        selectedRecipeId
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("recipeListOperations: ", recipeListOperations.fetchRecipes, dispatch)
    const fetchRecipes = () => { return dispatch(recipeListOperations.fetchRecipes()) }
    const selectRecipe = (recipe) => { 
        if (recipe.id != null) {
            dispatch(recipeListOperations.selectRecipe(recipe.id)) 
            dispatch(recipeViewerOperations.recipeSelected(recipe))
        }
    };

    const addNew = () => {
            dispatch(recipeViewerOperations.createNewRecipe())
            dispatch(recipeListOperations.selectRecipe(null))
        }

    const remove = (id) => {
        dispatch(recipeListOperations.deleteRecipe(id))
        dispatch(recipeViewerOperations.recipeDeleted(id))
    }

    return {
        fetchRecipes,
        selectRecipe,
        addNew,
        remove
    }

}

const RecipeListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeListComponent)

export default RecipeListContainer