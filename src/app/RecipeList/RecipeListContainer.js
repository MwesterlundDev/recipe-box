import { connect } from 'react-redux';

import recipeListOperations from './ReduxStuff/operations' // not sure about this....
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
    const selectRecipe = (id) => dispatch(recipeListOperations.selectRecipe(id));

    return {
        fetchRecipes,
        selectRecipe
    }

}

const RecipeListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeListComponent)

export default RecipeListContainer