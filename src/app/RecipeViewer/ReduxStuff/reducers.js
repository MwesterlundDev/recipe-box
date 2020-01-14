import types from './types';

const INITIAL_STATE = {
    recipe: {
        id: null,
        title: '',
        description: '',
        ingridients: [],
        steps: []
    }
}


const recipeViewerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RECIPE_SELECTED:
            return {
                ...state,
                recipe: (state.recipe.id !== action.recipe.id) ? { ...action.recipe } : INITIAL_STATE.recipe
            }
        default:
            return state
    }

}

export default recipeViewerReducer;