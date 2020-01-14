import { connect } from 'react-redux'

import RecipeViewerComponent from './RecipeViewerCompenent'


const getRecipeFromRecipes = (recipes, id) => {
    var selectedRecipes = recipes.filter((recipe) => {
        return recipe.id === id
    })
    
    return selectedRecipes[0];
}

const mapStateToProps = (state) => {
    const { recipes, selectedRecipeId } = state.recipeListReducer;


    return {
        selectedRecipe: (selectedRecipeId) ? getRecipeFromRecipes(recipes, selectedRecipeId) : null
    }
}

const mapDispatchToProps = (dispatch) => {

    return null
}

const RecipeViewerContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeViewerComponent);

export default RecipeViewerContainer;