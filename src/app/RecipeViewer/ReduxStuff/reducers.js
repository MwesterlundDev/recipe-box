import types from './types';

const INITIAL_STATE = {
    recipe: {
        id: null,
        title: '',
        description: '',
        ingredients: [],
        steps: []
    },
    isNew: false,
    isEdit: false,
}


const recipeViewerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RECIPE_SELECTED:
            return {
                ...state,
                recipe: (action.recipe != null && state.recipe.id !== action.recipe.id && action.recipe.id != null) ? { ...action.recipe } : INITIAL_STATE.recipe,
                isNew: false
            }

        case types.CREATE_NEW_RECIPE:
            return {
                ...INITIAL_STATE,
                isNew: true,
            }

        case types.CANCEL_EDIT: 
            return (state.isEdit) ? { ...state, isEdit: false} : INITIAL_STATE

        case types.RECIPE_DELETED:
            return (action.id === state.recipe.id) ? INITIAL_STATE : state 
        
        case types.EDIT_RECIPE:
            return {
                ...state,
                isEdit: true,
            }

        case types.RECIPE_UPDATED:
            return {
                ...state,
                recipe: {
                    ...action.recipe
                },
                isEdit: false,
            }
        
        default:
            return state
    }

}

export default recipeViewerReducer;