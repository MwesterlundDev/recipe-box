import types from './types'
import utils from '../../../utils/mark'

const INITIAL_STATE = {
    recipes: [],
    selectedRecipeId: null,
}

const recipeListReducer = (state = INITIAL_STATE, action) => {
    console.log("state: ", state)
    switch (action.type) {
        case types.ADD_NEW_RECIPE:
            const { recipe } = action

            recipe.id = new Date().getTime(); // bad id but should be unique for now
            return {
                ...state,
                recipes: [...state.recipes, recipe]
            }
        case types.DELETE_RECIPE:
            const index = utils.findIndexByValue(state.recipes, "id", action.id)

            if (index < 0) {
                return state;
            }

            const recipeList = [
                ...state.recipes.slice(0, index),
                ...state.recipes.slice(index + 1, state.recipes.length)
              ];
            return { 
                ...state,
                selectedRecipeId: (state.selectedRecipeId === action.id) ? null : state.selectedRecipeId,
                recipes: recipeList
            }
        case types.SELECT_RECIPE:
            const { id } = action

            return {
                ...state,
                selectedRecipeId: (state.selectedRecipeId === id) ? null : id
            }
        case types.REQUEST_RECIPES:
            return {
                ...state,
                recipes: []
            }
        case types.RECEIVE_RECIPES:
            const { recipes } = action;

            return {
                selectedRecipeId: null,
                recipes: recipes
            }
        default: 
            return state
    }
} 

export default recipeListReducer;